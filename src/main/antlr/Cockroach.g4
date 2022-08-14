grammar Cockroach;

@header {
    package ru.nizhikov.cockroach.antlr;
}

prog
    : exprs EOF
    ;

exprs
    : (expr NEWLINE)* expr
    ;

expr
    : function
    | function LINE_COMMENT
    | repeat
    | repeat LINE_COMMENT
    | LINE_COMMENT
    ;

function
    : UP
    | DOWN
    | LEFT
    | RIGHT
    | STAY
    ;

repeat
    : REPEAT NUM function
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
NEWLINE: '\r'? '\n';
WORD: LETTER+;
LETTER: [A-Za-zА-Яа-я];
NUM: [0-9]+;