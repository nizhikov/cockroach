package ru.nizhikov.cockroach;

import java.io.IOException;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static ru.nizhikov.cockroach.Field.CAN_T_MOVE_WALL;
import static ru.nizhikov.cockroach.Field.COCKROACH;
import static ru.nizhikov.cockroach.Field.EMPTY;

public class FieldTest {
    public static final String TEST_FIELD =
        "__________\n" +
        "__________\n" +
        "_КОТ__яZz_\n" +
        "_~________\n" +
        "__________";

    @Test
    public void testLoad() throws IOException {
        Field f = Field.load(TEST_FIELD);

        assertNotNull(f);
        assertArrayEquals(new int[] {3, 1}, f.position());

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
    public void testDoubleCockroachThrows() throws IOException {
        assertThrows(RuntimeException.class, () -> Field.load(
            "____~_____\n" +
            "____~_____\n"));
    }

    @Test
    public void testDifferentStringThrows() throws IOException {
        assertThrows(RuntimeException.class, () -> Field.load(
            "__________\n" +
            "____________\n"));
    }

    @Test
    public void testWrongCharactersThrows() throws IOException {
        assertThrows(RuntimeException.class, () -> Field.load("123_"));
    }

    @Test
    public void testNullLineThrows() throws IOException {
        assertThrows(RuntimeException.class, () -> Field.checkLine(null, 1, 0));
    }

    @Test
    public void testUp() throws IOException {
        Field f = Field.load(
            "_\n" +
            "A\n" +
            "_\n" +
            "~\n" +
            "_\n"
        );

        assertArrayEquals(new int[] {3, 0}, f.position());

        f.up();

        assertEquals(
            "_\n" +
            "A\n" +
            "~\n" +
            "_\n" +
            "_\n",
            f.toString()
        );
        assertArrayEquals(new int[] {2, 0}, f.position());

        f.up();

        assertEquals(
            "A\n" +
            "~\n" +
            "_\n" +
            "_\n" +
            "_\n",
            f.toString()
        );
        assertArrayEquals(new int[] {1, 0}, f.position());

        assertThrows(RuntimeException.class, f::up, CAN_T_MOVE_WALL);
    }

    @Test
    public void testDown() throws IOException {
        Field f = Field.load(
            "~\n" +
            "_\n" +
            "A\n" +
            "_\n"
        );
        assertArrayEquals(new int[] {0, 0}, f.position());

        f.down();

        assertEquals(
            "_\n" +
            "~\n" +
            "A\n" +
            "_\n",
            f.toString()
        );
        assertArrayEquals(new int[] {1, 0}, f.position());

        f.down();

        assertEquals(
            "_\n" +
            "_\n" +
            "~\n" +
            "A\n",
            f.toString()
        );
        assertArrayEquals(new int[] {2, 0}, f.position());

        assertThrows(RuntimeException.class, f::down, CAN_T_MOVE_WALL);
    }

    @Test
    public void testLeft() throws IOException {
        Field f = Field.load("_A_~_\n");

        assertArrayEquals(new int[] {0, 3}, f.position());

        f.left();

        assertEquals("_A~__\n", f.toString());
        assertArrayEquals(new int[] {0, 2}, f.position());

        f.left();

        assertEquals("A~___\n", f.toString());
        assertArrayEquals(new int[] {0, 1}, f.position());

        assertThrows(RuntimeException.class, f::left, CAN_T_MOVE_WALL);
    }

    @Test
    public void testRight() throws IOException {
        Field f = Field.load("~_A_\n");

        assertArrayEquals(new int[] {0, 0}, f.position());

        f.right();

        assertEquals("_~A_\n", f.toString());
        assertArrayEquals(new int[] {0, 1}, f.position());

        f.right();

        assertEquals("__~A\n", f.toString());
        assertArrayEquals(new int[] {0, 2}, f.position());

        assertThrows(RuntimeException.class, f::right, CAN_T_MOVE_WALL);
    }
}
