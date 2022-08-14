package ru.nizhikov.cockroach.cmd;

import java.io.File;
import java.util.concurrent.Callable;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import picocli.CommandLine;
import ru.nizhikov.cockroach.Field;
import ru.nizhikov.cockroach.ProgRunner;

import static java.nio.charset.StandardCharsets.UTF_8;

@CommandLine.Command(name = "run", version = "1.0-SNAPSHOT", description = "Execute cockroach application.")
public class RunCommand implements Callable<Integer> {
    private static final Logger LOG = LoggerFactory.getLogger(RunCommand.class.getName());

    @CommandLine.Option(names = {"-f", "--field"}, description = "Field", required = true)
    private File field;

    @CommandLine.Option(names = {"-s", "--source"}, description = "Application source", required = true)
    private File src;

    @Override public Integer call() throws Exception {
        ensureExists(field, "field");
        ensureExists(src, "source");

        Field fld = Field.load(field);

        fld.setChangeListener(fld0 -> {
            System.out.print(fld0);
            System.out.println("====");
        });

        new ProgRunner(
            fld,
            FileUtils.readFileToString(src, UTF_8)
        ).run();

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
