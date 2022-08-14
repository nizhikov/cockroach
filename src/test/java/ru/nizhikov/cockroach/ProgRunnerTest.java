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

        new ProgRunner(f, "ВПРАВО ПОВТОРИ 2 { ВПРАВО }").run();

        assertEquals("___~\n", f.toString());
    }

    @Test
    public void testWhileEmpty() throws IOException {
        Field f = Field.load("~_А_\n");

        new ProgRunner(f, "ПОКА ПУСТО ВПРАВО").run();

        assertEquals("__~А\n", f.toString());

        f = Field.load("~__А_\n");

        new ProgRunner(f, "ВПРАВО ПОКА ПУСТО { ВПРАВО }").run();

        assertEquals("___~А\n", f.toString());
    }

    @Test
    public void testWhileNotEmpty() throws IOException {
        Field f = Field.load(
            "____\n" +
            "ААА_\n" +
            "~___\n"
        );

        new ProgRunner(f, "ВВЕРХ ПОКА НЕ ПУСТО { ВНИЗ ВПРАВО ВВЕРХ }").run();

        assertEquals(
            "ААА_\n" +
            "___~\n" +
            "____\n", f.toString());
    }

    @Test
    public void testWhileLetter() throws IOException {
        Field f = Field.load(
            "____\n" +
            "ААА_\n" +
            "~___\n"
        );

        new ProgRunner(f, "ВВЕРХ ПОКА А { ВНИЗ ВПРАВО ВВЕРХ }").run();

        assertEquals(
            "ААА_\n" +
            "___~\n" +
            "____\n", f.toString());
    }

    @Test
    public void testWhileNotLetter() throws IOException {
        Field f = Field.load("~_А_\n");

        new ProgRunner(f, "ПОКА НЕ А ВПРАВО").run();

        assertEquals("__~А\n", f.toString());
    }

    @Test
    public void testWhileNumber() throws IOException {
        Field f = Field.load(
            "____\n" +
            "888_\n" +
            "~___\n"
        );

        new ProgRunner(f, "ВВЕРХ ПОКА ЦИФРА { ВНИЗ ВПРАВО ВВЕРХ }").run();

        assertEquals(
            "888_\n" +
            "___~\n" +
            "____\n", f.toString());
    }

    @Test
    public void testWhileNotNumber() throws IOException {
        Field f = Field.load("~_7_\n");

        new ProgRunner(f, "ПОКА НЕ ЦИФРА ВПРАВО").run();

        assertEquals("__~7\n", f.toString());
    }

    @Test
    public void testIf() throws IOException {
        Field f = Field.load(
            "_А_\n" +
            "~А_\n"
        );

        new ProgRunner(f, "ВПРАВО ЕСЛИ А ТО { ВЛЕВО ВВЕРХ ВПРАВО }").run();

        assertEquals(
            "_~А\n" +
            "__А\n", f.toString());
    }

    @Test
    public void testIfElse() throws IOException {
        Field f = Field.load(
            "_____\n" +
            "_____\n" +
            "А1А1_\n" +
            "~____\n"
        );

        new ProgRunner(f, "ПОВТОРИ 4 { ВВЕРХ ЕСЛИ ЦИФРА ТО ВНИЗ ИНАЧЕ { ВВЕРХ ВНИЗ ВНИЗ } ВПРАВО } ").run();

        assertEquals(
            "А_А__\n" +
            "_1_1_\n" +
            "_____\n" +
            "____~\n", f.toString());
    }
}
