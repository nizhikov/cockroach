// Generated from ../console/src/main/antlr/Cockroach.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';

const serializedATN = [4,0,24,177,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,1,0,1,0,5,0,54,8,0,10,0,
12,0,57,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,
1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,
1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,
11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,
1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,
19,1,19,1,19,5,19,157,8,19,10,19,12,19,160,9,19,1,20,1,20,1,21,4,21,165,
8,21,11,21,12,21,166,1,22,1,22,1,23,4,23,172,8,23,11,23,12,23,173,1,23,1,
23,0,0,24,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,
27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,1,0,4,
2,0,10,10,13,13,3,0,65,90,97,122,1040,1103,1,0,48,57,3,0,9,10,13,13,32,32,
181,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,
0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,
0,0,0,0,47,1,0,0,0,1,49,1,0,0,0,3,60,1,0,0,0,5,66,1,0,0,0,7,71,1,0,0,0,9,
77,1,0,0,0,11,84,1,0,0,0,13,91,1,0,0,0,15,94,1,0,0,0,17,100,1,0,0,0,19,106,
1,0,0,0,21,114,1,0,0,0,23,119,1,0,0,0,25,125,1,0,0,0,27,127,1,0,0,0,29,129,
1,0,0,0,31,134,1,0,0,0,33,137,1,0,0,0,35,143,1,0,0,0,37,147,1,0,0,0,39,153,
1,0,0,0,41,161,1,0,0,0,43,164,1,0,0,0,45,168,1,0,0,0,47,171,1,0,0,0,49,50,
5,47,0,0,50,51,5,47,0,0,51,55,1,0,0,0,52,54,8,0,0,0,53,52,1,0,0,0,54,57,
1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,59,6,
0,0,0,59,2,1,0,0,0,60,61,5,1042,0,0,61,62,5,1042,0,0,62,63,5,1045,0,0,63,
64,5,1056,0,0,64,65,5,1061,0,0,65,4,1,0,0,0,66,67,5,1042,0,0,67,68,5,1053,
0,0,68,69,5,1048,0,0,69,70,5,1047,0,0,70,6,1,0,0,0,71,72,5,1042,0,0,72,73,
5,1051,0,0,73,74,5,1045,0,0,74,75,5,1042,0,0,75,76,5,1054,0,0,76,8,1,0,0,
0,77,78,5,1042,0,0,78,79,5,1055,0,0,79,80,5,1056,0,0,80,81,5,1040,0,0,81,
82,5,1042,0,0,82,83,5,1054,0,0,83,10,1,0,0,0,84,85,5,1057,0,0,85,86,5,1058,
0,0,86,87,5,1054,0,0,87,88,5,1071,0,0,88,89,5,1058,0,0,89,90,5,1068,0,0,
90,12,1,0,0,0,91,92,5,1053,0,0,92,93,5,1045,0,0,93,14,1,0,0,0,94,95,5,1055,
0,0,95,96,5,1059,0,0,96,97,5,1057,0,0,97,98,5,1058,0,0,98,99,5,1054,0,0,
99,16,1,0,0,0,100,101,5,1062,0,0,101,102,5,1048,0,0,102,103,5,1060,0,0,103,
104,5,1056,0,0,104,105,5,1040,0,0,105,18,1,0,0,0,106,107,5,1055,0,0,107,
108,5,1054,0,0,108,109,5,1042,0,0,109,110,5,1058,0,0,110,111,5,1054,0,0,
111,112,5,1056,0,0,112,113,5,1048,0,0,113,20,1,0,0,0,114,115,5,1055,0,0,
115,116,5,1054,0,0,116,117,5,1050,0,0,117,118,5,1040,0,0,118,22,1,0,0,0,
119,120,5,1041,0,0,120,121,5,1059,0,0,121,122,5,1050,0,0,122,123,5,1042,
0,0,123,124,5,1040,0,0,124,24,1,0,0,0,125,126,5,123,0,0,126,26,1,0,0,0,127,
128,5,125,0,0,128,28,1,0,0,0,129,130,5,1045,0,0,130,131,5,1057,0,0,131,132,
5,1051,0,0,132,133,5,1048,0,0,133,30,1,0,0,0,134,135,5,1058,0,0,135,136,
5,1054,0,0,136,32,1,0,0,0,137,138,5,1048,0,0,138,139,5,1053,0,0,139,140,
5,1040,0,0,140,141,5,1063,0,0,141,142,5,1045,0,0,142,34,1,0,0,0,143,144,
5,1069,0,0,144,145,5,1058,0,0,145,146,5,1054,0,0,146,36,1,0,0,0,147,148,
5,1050,0,0,148,149,5,1054,0,0,149,150,5,1053,0,0,150,151,5,1045,0,0,151,
152,5,1062,0,0,152,38,1,0,0,0,153,158,3,41,20,0,154,157,3,41,20,0,155,157,
3,45,22,0,156,154,1,0,0,0,156,155,1,0,0,0,157,160,1,0,0,0,158,156,1,0,0,
0,158,159,1,0,0,0,159,40,1,0,0,0,160,158,1,0,0,0,161,162,7,1,0,0,162,42,
1,0,0,0,163,165,3,45,22,0,164,163,1,0,0,0,165,166,1,0,0,0,166,164,1,0,0,
0,166,167,1,0,0,0,167,44,1,0,0,0,168,169,7,2,0,0,169,46,1,0,0,0,170,172,
7,3,0,0,171,170,1,0,0,0,172,173,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,
174,175,1,0,0,0,175,176,6,23,0,0,176,48,1,0,0,0,6,0,55,156,158,166,173,1,
6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CockroachLexer extends antlr4.Lexer {

    static grammarFileName = "Cockroach.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, "'\\u0412\\u0412\\u0415\\u0420\\u0425'", 
                         "'\\u0412\\u041D\\u0418\\u0417'", "'\\u0412\\u041B\\u0415\\u0412\\u041E'", 
                         "'\\u0412\\u041F\\u0420\\u0410\\u0412\\u041E'", 
                         "'\\u0421\\u0422\\u041E\\u042F\\u0422\\u042C'", 
                         "'\\u041D\\u0415'", "'\\u041F\\u0423\\u0421\\u0422\\u041E'", 
                         "'\\u0426\\u0418\\u0424\\u0420\\u0410'", "'\\u041F\\u041E\\u0412\\u0422\\u041E\\u0420\\u0418'", 
                         "'\\u041F\\u041E\\u041A\\u0410'", "'\\u0411\\u0423\\u041A\\u0412\\u0410'", 
                         "'{'", "'}'", "'\\u0415\\u0421\\u041B\\u0418'", 
                         "'\\u0422\\u041E'", "'\\u0418\\u041D\\u0410\\u0427\\u0415'", 
                         "'\\u042D\\u0422\\u041E'", "'\\u041A\\u041E\\u041D\\u0415\\u0426'" ];
	static symbolicNames = [ null, "LINE_COMMENT", "UP", "DOWN", "LEFT", "RIGHT", 
                          "STAY", "NOT", "EMPTY", "NUMBER", "REPEAT", "WHILE", 
                          "CHAR", "OPEN_BRACKET", "CLOSE_BRACKET", "IF", 
                          "THEN", "ELSE", "THIS", "END", "ID", "LETTER", 
                          "NUM", "DIGIT", "SPACE" ];
	static ruleNames = [ "LINE_COMMENT", "UP", "DOWN", "LEFT", "RIGHT", "STAY", 
                      "NOT", "EMPTY", "NUMBER", "REPEAT", "WHILE", "CHAR", 
                      "OPEN_BRACKET", "CLOSE_BRACKET", "IF", "THEN", "ELSE", 
                      "THIS", "END", "ID", "LETTER", "NUM", "DIGIT", "SPACE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

CockroachLexer.EOF = antlr4.Token.EOF;
CockroachLexer.LINE_COMMENT = 1;
CockroachLexer.UP = 2;
CockroachLexer.DOWN = 3;
CockroachLexer.LEFT = 4;
CockroachLexer.RIGHT = 5;
CockroachLexer.STAY = 6;
CockroachLexer.NOT = 7;
CockroachLexer.EMPTY = 8;
CockroachLexer.NUMBER = 9;
CockroachLexer.REPEAT = 10;
CockroachLexer.WHILE = 11;
CockroachLexer.CHAR = 12;
CockroachLexer.OPEN_BRACKET = 13;
CockroachLexer.CLOSE_BRACKET = 14;
CockroachLexer.IF = 15;
CockroachLexer.THEN = 16;
CockroachLexer.ELSE = 17;
CockroachLexer.THIS = 18;
CockroachLexer.END = 19;
CockroachLexer.ID = 20;
CockroachLexer.LETTER = 21;
CockroachLexer.NUM = 22;
CockroachLexer.DIGIT = 23;
CockroachLexer.SPACE = 24;



