package ru.nizhikov.cockroach;

import java.io.IOException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class ProgRunnerTest {
    @Test
    public void testSimplestProgramm() throws IOException {
        Field f = Field.load(
            "0000000000\n" +
            "0000000000\n" +
            "0КОТ000000\n" +
            "0~00000000\n" +
            "0000000000");

        assertNotNull(f);

        new ProgRunner(f, "ВВЕРХ\nВНИЗ").run();
    }
}
