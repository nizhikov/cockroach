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
        "0000000000\n" +
        "0000000000\n" +
        "0КОТ00яZz0\n" +
        "0~00000000\n" +
        "0000000000";

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
            "0000~00000\n" +
            "0000~00000\n"));
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

    @Test
    public void testUp() throws IOException {
        Field f = Field.load(
            "0\n" +
            "A\n" +
            "0\n" +
            "~\n" +
            "0\n"
        );

        assertArrayEquals(new int[] {3, 0}, f.position());

        f.up();

        assertEquals(
            "0\n" +
            "A\n" +
            "~\n" +
            "0\n" +
            "0\n",
            f.toString()
        );
        assertArrayEquals(new int[] {2, 0}, f.position());

        f.up();

        assertEquals(
            "A\n" +
            "~\n" +
            "0\n" +
            "0\n" +
            "0\n",
            f.toString()
        );
        assertArrayEquals(new int[] {1, 0}, f.position());

        assertThrows(RuntimeException.class, f::up, CAN_T_MOVE_WALL);
    }

    @Test
    public void testDown() throws IOException {
        Field f = Field.load(
            "~\n" +
            "0\n" +
            "A\n" +
            "0\n"
        );
        assertArrayEquals(new int[] {0, 0}, f.position());

        f.down();

        assertEquals(
            "0\n" +
            "~\n" +
            "A\n" +
            "0\n",
            f.toString()
        );
        assertArrayEquals(new int[] {1, 0}, f.position());

        f.down();

        assertEquals(
            "0\n" +
            "0\n" +
            "~\n" +
            "A\n",
            f.toString()
        );
        assertArrayEquals(new int[] {2, 0}, f.position());

        assertThrows(RuntimeException.class, f::down, CAN_T_MOVE_WALL);
    }

    @Test
    public void testLeft() throws IOException {
        Field f = Field.load("0A0~0\n");

        assertArrayEquals(new int[] {0, 3}, f.position());

        f.left();

        assertEquals("0A~00\n", f.toString());
        assertArrayEquals(new int[] {0, 2}, f.position());

        f.left();

        assertEquals("A~000\n", f.toString());
        assertArrayEquals(new int[] {0, 1}, f.position());

        assertThrows(RuntimeException.class, f::left, CAN_T_MOVE_WALL);
    }

    @Test
    public void testRight() throws IOException {
        Field f = Field.load("~0A0\n");

        assertArrayEquals(new int[] {0, 0}, f.position());

        f.right();

        assertEquals("0~A0\n", f.toString());
        assertArrayEquals(new int[] {0, 1}, f.position());

        f.right();

        assertEquals("00~A\n", f.toString());
        assertArrayEquals(new int[] {0, 2}, f.position());

        assertThrows(RuntimeException.class, f::right, CAN_T_MOVE_WALL);
    }
}
