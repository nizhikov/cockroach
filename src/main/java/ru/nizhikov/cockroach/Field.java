package ru.nizhikov.cockroach;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Field {
    public static final char COCKROACH = '~';

    public static final char EMPTY = '0';

    private final List<char[]> field;

    private Field(List<char[]> field) {
        this.field = field;
    }

    public static Field load(String field) throws IOException {
        return load(new Scanner(field));
    }

    public static Field load(File file) throws IOException {
        return load(new Scanner(file));
    }

    public static Field load(Scanner sc) {
        List<char[]> data = new ArrayList<>();

        String line = sc.nextLine();
        int width = line.length();

        int idx = 0;

        data.add(checkLine(line, width, idx));

        while (sc.hasNextLine())
            data.add(checkLine(sc.nextLine(), width, ++idx));

        return new Field(data);
    }

    public char charAt(int i, int j) {
        return field.get(i)[j];
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

            throw new RuntimeException("Wrong character[ch='" + ch + "',line=" + idx + ",idx=" + i + ']');
        }

        return line.toCharArray();
    }
}
