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
    | proc
    | id
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
    : OPEN_BRACKET exprs CLOSE_BRACKET
    ;

if
    : IF condition THEN statement (ELSE statement)?
    ;

proc
    : THIS id exprs END
    ;

condition
    : NOT? id
    | NOT? EMPTY
    | NOT? NUMBER
    ;

id
    : ID
    ;

LINE_COMMENT : '//' ~[\n\r]* -> skip;
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
THIS: 'ЭТО';
END: 'КОНЕЦ';
ID: LETTER (LETTER | DIGIT)*;
LETTER: [a-zA-Zа-яА-Я];
NUM: DIGIT+;
DIGIT: [0-9];
SPACE: [ \r\n\t]+ -> skip;