package ru.nizhikov.cockroach.cmd;

import picocli.CommandLine;

@CommandLine.Command(
    name = "cockroach",
    subcommands = {RunCommand.class, DebugCommand.class},
    version = "1.0-SNAPSHOT",
    description = "Interpretator of cockroach application."
)
public class Main {
    public static void main(String[] args) {
        new CommandLine(new Main()).execute(args);
    }
}
