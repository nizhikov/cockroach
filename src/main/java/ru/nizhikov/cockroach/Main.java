package ru.nizhikov.cockroach;

import picocli.CommandLine;

@CommandLine.Command(name = "cockroach", version = "1.0-SNAPSHOT", description = "Interpretator of cockroach application.")
public class Main {
    public static void main(String[] args) {
        System.exit(new CommandLine(new Run()).execute(args));
    }
}
