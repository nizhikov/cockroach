package ru.nizhikov.cockroach.cmd;

import picocli.CommandLine;

@CommandLine.Command(name = "cockroach", version = "1.0-SNAPSHOT", description = "Interpretator of cockroach application.")
public class Main {
    public static void main(String[] args) {
        System.exit(new CommandLine(new RunCommand()).execute(args));
    }
}
