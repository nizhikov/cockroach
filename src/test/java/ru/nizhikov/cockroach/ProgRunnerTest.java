package ru.nizhikov.cockroach;

import java.io.IOException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class ProgRunnerTest {
    @Test
    public void testSimplestProgramm() throws IOException {
        Field f = Field.load(
            "__________\n" +
            "__________\n" +
            "_КОТ______\n" +
            "_~________\n" +
            "__________");

        assertNotNull(f);

        new ProgRunner(f, "ВВЕРХ\nВНИЗ\nВЛЕВО\nВПРАВО\nСТОЯТЬ").run();
    }

    @Test
    public void testRepeat() throws IOException {
        Field f = Field.load("~___");

        new ProgRunner(f, "ПОВТОРИ 3 ВПРАВО").run();

        assertEquals("___~\n", f.toString());

        f = Field.load("~___");

        new ProgRunner(f, "ПОВТОРИ 3 ВПРАВО // Комментарий!").run();

        assertEquals("___~\n", f.toString());

    }
}
