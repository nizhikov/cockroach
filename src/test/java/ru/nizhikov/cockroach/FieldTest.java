package ru.nizhikov.cockroach;

import java.io.IOException;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static ru.nizhikov.cockroach.Field.COCKROACH;
import static ru.nizhikov.cockroach.Field.EMPTY;

public class FieldTest {
    @Test
    public void testLoad() throws IOException {
        Field f = Field.load(
            "0000000000\n" +
            "0000000000\n" +
            "0КОТ00яZz0\n" +
            "0~00000000\n" +
            "0000000000");

        assertNotNull(f);

        for (int i=0; i<5; i++) {
            for (int j=0; j<10; j++) {
                if (i == 2 && j == 1)
                    assertEquals('К', f.charAt(i, j));
                else if (i == 2 && j == 2)
                    assertEquals('О', f.charAt(i, j));
                else if (i == 2 && j == 3)
                    assertEquals('Т', f.charAt(i, j));
                else if (i == 2 && j == 6)
                    assertEquals('я', f.charAt(i, j));
                else if (i == 2 && j == 7)
                    assertEquals('Z', f.charAt(i, j));
                else if (i == 2 && j == 8)
                    assertEquals('z', f.charAt(i, j));
                else if (i == 3 && j == 1)
                    assertEquals(COCKROACH, f.charAt(i, j));
                else
                    assertEquals(EMPTY, f.charAt(i, j));
            }
        }
    }

    @Test
    public void testDifferentStringThrows() throws IOException {
        assertThrows(RuntimeException.class, () -> Field.load(
            "0000000000\n" +
            "000000000000\n"));
    }

    @Test
    public void testWrongCharactersThrows() throws IOException {
        assertThrows(RuntimeException.class, () -> Field.load("1230"));
    }

    @Test
    public void testNullLineThrows() throws IOException {
        assertThrows(RuntimeException.class, () -> Field.checkLine(null, 1, 0));
    }
}
