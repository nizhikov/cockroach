package ru.nizhikov.cockroach.cmd;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.Callable;
import java.util.concurrent.atomic.AtomicBoolean;
import org.antlr.v4.runtime.tree.ParseTree;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import picocli.CommandLine;
import ru.nizhikov.cockroach.Field;
import ru.nizhikov.cockroach.ProgRunner;
import ru.nizhikov.cockroach.antlr.CockroachParser;

import static java.nio.charset.StandardCharsets.UTF_8;

@CommandLine.Command(name = "run", version = "1.0-SNAPSHOT", description = "Execute cockroach application.")
public class RunCommand implements Callable<Integer> {
    private static final Logger LOG = LoggerFactory.getLogger(RunCommand.class.getName());

    @CommandLine.Option(names = {"-f", "--field"}, description = "Field", required = true)
    private File field;

    @CommandLine.Option(names = {"-s", "--source"}, description = "Application source", required = true)
    private File src;

    @CommandLine.Option(names = {"-d", "--delay"}, description = "Delay between steps", defaultValue = "500", required = true)
    private int delay;

    private final boolean debug;

    public RunCommand() {
        this(false);
    }

    public RunCommand(boolean debug) {
        this.debug = debug;
    }

    @Override public Integer call() throws Exception {
        ensureExists(field, "field");
        ensureExists(src, "source");

        Field fld = Field.load(field);
        ProgRunner runner = new ProgRunner(fld, FileUtils.readFileToString(src, UTF_8));

        AtomicBoolean first = new AtomicBoolean(true);
        final int[] maxStackLength = {0};

        fld.changeListener(fld0 -> {
            if (!first.get()) {
                int extraRmv = 2;

                if (debug)
                    extraRmv += 3;

                System.out.print(String.format("\033[%dA", fld0.height() + extraRmv)); // Move up
                System.out.print("\033[2K");
            }

            ParseTree prev = runner.prev();
            ParseTree next = runner.next();

            if (debug) {
                System.out.println("[prev=" + (prev == null ? "null" : prev.getText()) +
                    ", next=" + (next == null ? "null" : next.getText()) +
                    ", char=" + fld.lastChar() + ']');

                String stack = "[stack";

                for (ParseTree item : runner.stack()) {
                    if (item instanceof CockroachParser.ProcContext proc)
                        stack += ">" + proc.id().getText();
                    else
                        throw new IllegalArgumentException("Unknown stack item [cls=" + item.getClass().getSimpleName() + ']');
                }

                stack += ']';

                System.out.print(stack);

                if (stack.length() >= maxStackLength[0])
                    maxStackLength[0] = stack.length();
                else {
                    for (int i = 0; i < (maxStackLength[0] - stack.length()); i++)
                        System.out.print(' ');
                }

                System.out.println();
            }

            System.out.print(fld0.toString(true));

            try {
                if (debug)
                    System.in.read();
                else
                    Thread.sleep(delay);
            }
            catch (InterruptedException | IOException e) {
                throw new RuntimeException(e);
            }

            first.set(false);
        });

        runner.run();

        fld.stay(); // To trigger change listener and output last field state.

        return 0;
    }

    private void ensureExists(File file, String name) {
        if (file == null || !file.exists()) {
            String msg = name + " doesn't exists!";

            LOG.error(msg);

            throw new RuntimeException(msg);
        }
    }
}
