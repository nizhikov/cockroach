package ru.nizhikov.cockroach;

import java.io.IOException;
import java.io.InputStream;
import java.util.Scanner;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class ProgRunnerTest {
    private final Logger log = LoggerFactory.getLogger(ProgRunnerTest.class);

    @Test
    public void testAll() throws IOException {
        int i = 0;
        InputStream f = this.getClass().getResourceAsStream("/progs/test" + i + ".txt");

        do {
            log.info("Testing file[f=/progs/test" + i + ".txt" + ']');

            testFile(f);
            i++;

            f = this.getClass().getResourceAsStream("/progs/test" + i + ".txt");
        }while (f != null);

    }

    private void testFile(InputStream file) throws IOException {
        Scanner sc = new Scanner(file);

        StringBuilder startField = new StringBuilder();
        StringBuilder endField = new StringBuilder();
        StringBuilder prog = new StringBuilder();

        String line = sc.nextLine();

        while (!line.isEmpty()) {
            startField.append(line).append("\n");
            line = sc.nextLine();
        }

        line = sc.nextLine();

        while (!line.isEmpty()) {
            prog.append(line).append("\n");
            line = sc.nextLine();
        }

        line = sc.nextLine();

        endField.append(line).append("\n");

        while (sc.hasNextLine()) {
            line = sc.nextLine();
            if (line.isEmpty())
                break;

            endField.append(line).append("\n");
        }

        Field f = Field.load(startField.toString());

        assertNotNull(f);

        new ProgRunner(f, prog.toString()).run();

        assertEquals(endField.toString(), f.toString());
    }
}
