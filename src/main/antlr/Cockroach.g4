grammar Cockroach;

@header {
    package ru.nizhikov.cockroach.antlr;
}

prog
    : exprs EOF
    ;

exprs
    : expr+
    ;

expr
    : statement
    | repeat
    | while
    | if
    | LINE_COMMENT
    ;

statement
    : UP
    | DOWN
    | LEFT
    | RIGHT
    | STAY
    | group
    ;

repeat
    : REPEAT NUM expr
    ;

while
    : WHILE condition expr
    ;

group
    : OPEN_BRACKET expr+ CLOSE_BRACKET
    ;

if
    : IF condition THEN statement (ELSE statement)?
    ;

condition
    : NOT? WORD
    | NOT? EMPTY
    | NOT? NUMBER
    ;

LINE_COMMENT
    : '//' ~[\n\r]*
    ;

UP: 'ВВЕРХ';
DOWN: 'ВНИЗ';
LEFT: 'ВЛЕВО';
RIGHT: 'ВПРАВО';
STAY: 'СТОЯТЬ';
NOT: 'НЕ';
EMPTY: 'ПУСТО';
NUMBER: 'ЦИФРА';
REPEAT: 'ПОВТОРИ';
WHILE: 'ПОКА';
CHAR: 'БУКВА';
OPEN_BRACKET: '{';
CLOSE_BRACKET: '}';
IF: 'ЕСЛИ';
THEN: 'ТО';
ELSE: 'ИНАЧЕ';
WORD: LETTER+;
LETTER: [a-zA-Zа-яА-Я];
NUM: [0-9]+;
SPACE: [ \r\n\t]+ -> skip;