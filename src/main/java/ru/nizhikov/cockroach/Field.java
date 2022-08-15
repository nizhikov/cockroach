package ru.nizhikov.cockroach;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.function.Consumer;

public class Field {
    public static final char COCKROACH = '~';

    public static final char EMPTY = '_';

    public static final String CAN_T_MOVE_WALL = "Can't move wall";

    public static final String UP = "ВВЕРХ";

    public static final String DOWN = "ВНИЗ";

    public static final String LEFT = "ВЛЕВО";

    public static final String RIGHT = "ВПРАВО";

    public static final String STAY = "СТОЯТЬ";

    private final List<char[]> fld;

    private final int[] pos;

    private String lastCommand;

    private char lastCh = EMPTY;

    private Consumer<Field> lsnr;

    private Field(List<char[]> fld, int[] pos) {
        this.fld = fld;
        this.pos = pos;
    }

    public void setChangeListener(Consumer<Field> lsnr) {
        this.lsnr = lsnr;

        lsnr.accept(this);
    }

    public String getLastCommand() {
        return lastCommand;
    }

    public char getLastCharacter() {
        return lastCh;
    }

    public char charAt(int i, int j) {
        return fld.get(i)[j];
    }

    public int[] position() {
        return pos;
    }

    public void up() {
        move(-1, 0, UP);
    }

    public void down() {
        move(1, 0, DOWN);
    }

    public void left() {
        move(0, -1, LEFT);
    }

    public void right() {
        move(0, 1, RIGHT);
    }

    public void stay() {
        move(0, 0, STAY);
    }

    private void move(int idelta, int jdelta, String command) {
        lastCommand = command;

        if (command != STAY) {
            lastCh = move0(COCKROACH, pos[0], pos[1], idelta, jdelta);

            pos[0] += idelta;
            pos[1] += jdelta;
        }

        if (lsnr != null)
            lsnr.accept(this);
    }

    private char move0(char toUp, int i, int j, int idelta, int jdelta) {
        if (i + idelta < 0 || i + idelta >= fld.size())
            throw new RuntimeException(CAN_T_MOVE_WALL + "[cmd=" + lastCommand + ']');

        if (j + jdelta < 0 || j + jdelta >= fld.get(0).length) {
            System.out.println(this);
            throw new RuntimeException(CAN_T_MOVE_WALL + "[cmd=" + lastCommand + ']');
        }

        char possiblyEmpty = fld.get(i + idelta)[j + jdelta];

        if (possiblyEmpty != EMPTY)
            move0(possiblyEmpty, i + idelta, j + jdelta, idelta, jdelta);

        fld.get(i)[j] = EMPTY;
        fld.get(i + idelta)[j + jdelta] = toUp;

        return possiblyEmpty;
    }

    @Override public String toString() {
        return toString(false);
    }

    public String toString(boolean pretty) {
        StringBuilder bldr = new StringBuilder();

        if (pretty) {
            bldr.append("[command=" + lastCommand + ", char=" + lastCh + ']');
            bldr.append("\n");

            for (int i = 0; i < fld.get(0).length + 2; i++)
                bldr.append('_');
        }

        bldr.append("\n");

        for (char[] line : fld) {
            if (pretty)
                bldr.append('|');

            bldr.append(line);

            if (pretty)
                bldr.append('|');

            bldr.append('\n');
        }

        return bldr.toString();
    }

    public static Field load(String field) throws IOException {
        return load(new Scanner(field));
    }

    public static Field load(File file) throws IOException {
        return load(new Scanner(file));
    }

    public static Field load(Scanner sc) {
        List<char[]> data = new ArrayList<>();
        int[] position;

        String line = sc.nextLine();
        int width = line.length();

        int idx = 0;

        char[] line0 = checkLine(line, width, idx);
        position = findPosition(line0, idx);

        data.add(line0);

        while (sc.hasNextLine()) {
            line0 = checkLine(sc.nextLine(), width, ++idx);
            int[] position0 = findPosition(line0, idx);

            if (position0 != null) {
                if (position != null) {
                    throw new RuntimeException("Double cockroach position[" +
                        "first=[" + position[0] + ',' + position[1] + "," +
                        "],second=[" + position0[0] + ',' + position0[1] + "]]");
                }

                position = position0;
            }

            data.add(line0);
        }

        return new Field(data, position);
    }

    private static int[] findPosition(char[] line0, int idx) {
        for (int i = 0; i < line0.length; i++)
            if (line0[i] == COCKROACH)
                return new int[] {idx, i};

        return null;
    }

    public static char[] checkLine(String line, int expLength, int idx) {
        if (line == null)
            throw new RuntimeException("Line is null [idx=" + idx + ']');

        if (line.length() != expLength)
            throw new RuntimeException("Wrong line length[idx=" + idx + ",exp=" + expLength + ",actual=" + line.length() + ']');

        for (int i=0; i<expLength; i++) {
            char ch = line.charAt(i);

            if (ch == COCKROACH || ch == EMPTY)
                continue;
            else if (ch >= 'А' && ch <= 'Я')
                continue;
            else if (ch >= 'а' && ch <= 'я')
                continue;
            else if (ch >= 'A' && ch <= 'Z')
                continue;
            else if (ch >= 'a' && ch <= 'z')
                continue;
            else if (ch >= '0' && ch <= '9')
                continue;

            throw new RuntimeException("Wrong character[ch='" + ch + "',line=" + idx + ",idx=" + i + ']');
        }

        return line.toCharArray();
    }
}
