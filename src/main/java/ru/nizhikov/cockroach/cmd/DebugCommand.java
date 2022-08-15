package ru.nizhikov.cockroach.cmd;

import java.io.File;
import java.util.concurrent.Callable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import picocli.CommandLine;

@CommandLine.Command(name = "debug", version = "1.0-SNAPSHOT", description = "Step by step execution cockroach application.")
public class DebugCommand extends RunCommand {
    public DebugCommand() {
        super(true);
    }
}
