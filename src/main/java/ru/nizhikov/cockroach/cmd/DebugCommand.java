package ru.nizhikov.cockroach.cmd;

import java.io.File;
import java.util.concurrent.Callable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import picocli.CommandLine;

@CommandLine.Command(name = "debug", version = "1.0-SNAPSHOT", description = "Step by step execution cockroach application.")
public class DebugCommand implements Callable<Integer> {
    private static final Logger LOG = LoggerFactory.getLogger(RunCommand.class.getName());

    @CommandLine.Option(names = {"-f", "--field"}, description = "Field", required = true)
    private File field;

    @CommandLine.Option(names = {"-s", "--source"}, description = "Application source", required = true)
    private File src;

    @Override public Integer call() throws Exception {
        return null;
    }
}
