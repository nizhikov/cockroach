grammar Cockroach;

@header {
    package ru.nizhikov.cockroach.antlr;
}

prog
    : exprs EOF
    ;

exprs
    : (expr NEWLINE)+ expr
    ;

expr
    : function
    | function LINE_COMMENT
    | LINE_COMMENT
    ;

function
    : UP
    | DOWN
    | LEFT
    | RIGHT
    | STAY
    ;

LINE_COMMENT
    : '//' ~[\n\r]*
    ;

UP: 'ВВЕРХ';
DOWN: 'ВНИЗ';
LEFT: 'ВЛЕВО';
RIGHT: 'ВПРАВО';
STAY: 'СТОЯТЬ';
NEWLINE: '\r'? '\n';