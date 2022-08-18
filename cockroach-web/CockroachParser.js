// Generated from ../console/src/main/antlr/Cockroach.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CockroachListener from './CockroachListener.js';

const serializedATN = [4,1,24,89,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,1,4,1,27,
8,1,11,1,12,1,28,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,38,8,2,1,3,1,3,1,3,1,3,
1,3,1,3,3,3,46,8,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,
7,1,7,1,7,1,7,1,7,3,7,66,8,7,1,8,1,8,1,8,1,8,1,8,1,9,3,9,74,8,9,1,9,1,9,
3,9,78,8,9,1,9,1,9,3,9,82,8,9,1,9,3,9,85,8,9,1,10,1,10,1,10,0,0,11,0,2,4,
6,8,10,12,14,16,18,20,0,0,95,0,22,1,0,0,0,2,26,1,0,0,0,4,37,1,0,0,0,6,45,
1,0,0,0,8,47,1,0,0,0,10,51,1,0,0,0,12,55,1,0,0,0,14,59,1,0,0,0,16,67,1,0,
0,0,18,84,1,0,0,0,20,86,1,0,0,0,22,23,3,2,1,0,23,24,5,0,0,1,24,1,1,0,0,0,
25,27,3,4,2,0,26,25,1,0,0,0,27,28,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,
3,1,0,0,0,30,38,3,6,3,0,31,38,3,8,4,0,32,38,3,10,5,0,33,38,3,14,7,0,34,38,
3,16,8,0,35,38,3,20,10,0,36,38,5,1,0,0,37,30,1,0,0,0,37,31,1,0,0,0,37,32,
1,0,0,0,37,33,1,0,0,0,37,34,1,0,0,0,37,35,1,0,0,0,37,36,1,0,0,0,38,5,1,0,
0,0,39,46,5,2,0,0,40,46,5,3,0,0,41,46,5,4,0,0,42,46,5,5,0,0,43,46,5,6,0,
0,44,46,3,12,6,0,45,39,1,0,0,0,45,40,1,0,0,0,45,41,1,0,0,0,45,42,1,0,0,0,
45,43,1,0,0,0,45,44,1,0,0,0,46,7,1,0,0,0,47,48,5,10,0,0,48,49,5,22,0,0,49,
50,3,4,2,0,50,9,1,0,0,0,51,52,5,11,0,0,52,53,3,18,9,0,53,54,3,4,2,0,54,11,
1,0,0,0,55,56,5,13,0,0,56,57,3,2,1,0,57,58,5,14,0,0,58,13,1,0,0,0,59,60,
5,15,0,0,60,61,3,18,9,0,61,62,5,16,0,0,62,65,3,6,3,0,63,64,5,17,0,0,64,66,
3,6,3,0,65,63,1,0,0,0,65,66,1,0,0,0,66,15,1,0,0,0,67,68,5,18,0,0,68,69,3,
20,10,0,69,70,3,2,1,0,70,71,5,19,0,0,71,17,1,0,0,0,72,74,5,7,0,0,73,72,1,
0,0,0,73,74,1,0,0,0,74,75,1,0,0,0,75,85,3,20,10,0,76,78,5,7,0,0,77,76,1,
0,0,0,77,78,1,0,0,0,78,79,1,0,0,0,79,85,5,8,0,0,80,82,5,7,0,0,81,80,1,0,
0,0,81,82,1,0,0,0,82,83,1,0,0,0,83,85,5,9,0,0,84,73,1,0,0,0,84,77,1,0,0,
0,84,81,1,0,0,0,85,19,1,0,0,0,86,87,5,20,0,0,87,21,1,0,0,0,8,28,37,45,65,
73,77,81,84];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class CockroachParser extends antlr4.Parser {

    static grammarFileName = "Cockroach.g4";
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
    static symbolicNames = [ null, "LINE_COMMENT", "UP", "DOWN", "LEFT", 
                             "RIGHT", "STAY", "NOT", "EMPTY", "NUMBER", 
                             "REPEAT", "WHILE", "CHAR", "OPEN_BRACKET", 
                             "CLOSE_BRACKET", "IF", "THEN", "ELSE", "THIS", 
                             "END", "ID", "LETTER", "NUM", "DIGIT", "SPACE" ];
    static ruleNames = [ "prog", "exprs", "expr", "statement", "repeat", 
                         "while", "group", "if", "proc", "condition", "id" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CockroachParser.ruleNames;
        this.literalNames = CockroachParser.literalNames;
        this.symbolicNames = CockroachParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CockroachParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.exprs();
	        this.state = 23;
	        this.match(CockroachParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprs() {
	    let localctx = new ExprsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CockroachParser.RULE_exprs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 25;
	            this.expr();
	            this.state = 28; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CockroachParser.LINE_COMMENT) | (1 << CockroachParser.UP) | (1 << CockroachParser.DOWN) | (1 << CockroachParser.LEFT) | (1 << CockroachParser.RIGHT) | (1 << CockroachParser.STAY) | (1 << CockroachParser.REPEAT) | (1 << CockroachParser.WHILE) | (1 << CockroachParser.OPEN_BRACKET) | (1 << CockroachParser.IF) | (1 << CockroachParser.THIS) | (1 << CockroachParser.ID))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CockroachParser.RULE_expr);
	    try {
	        this.state = 37;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CockroachParser.UP:
	        case CockroachParser.DOWN:
	        case CockroachParser.LEFT:
	        case CockroachParser.RIGHT:
	        case CockroachParser.STAY:
	        case CockroachParser.OPEN_BRACKET:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.statement();
	            break;
	        case CockroachParser.REPEAT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.repeat();
	            break;
	        case CockroachParser.WHILE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.while_();
	            break;
	        case CockroachParser.IF:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 33;
	            this.if_();
	            break;
	        case CockroachParser.THIS:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 34;
	            this.proc();
	            break;
	        case CockroachParser.ID:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 35;
	            this.id();
	            break;
	        case CockroachParser.LINE_COMMENT:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 36;
	            this.match(CockroachParser.LINE_COMMENT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CockroachParser.RULE_statement);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CockroachParser.UP:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.match(CockroachParser.UP);
	            break;
	        case CockroachParser.DOWN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.match(CockroachParser.DOWN);
	            break;
	        case CockroachParser.LEFT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 41;
	            this.match(CockroachParser.LEFT);
	            break;
	        case CockroachParser.RIGHT:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 42;
	            this.match(CockroachParser.RIGHT);
	            break;
	        case CockroachParser.STAY:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 43;
	            this.match(CockroachParser.STAY);
	            break;
	        case CockroachParser.OPEN_BRACKET:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 44;
	            this.group();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeat() {
	    let localctx = new RepeatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CockroachParser.RULE_repeat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(CockroachParser.REPEAT);
	        this.state = 48;
	        this.match(CockroachParser.NUM);
	        this.state = 49;
	        this.expr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	while_() {
	    let localctx = new WhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CockroachParser.RULE_while);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(CockroachParser.WHILE);
	        this.state = 52;
	        this.condition();
	        this.state = 53;
	        this.expr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CockroachParser.RULE_group);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(CockroachParser.OPEN_BRACKET);
	        this.state = 56;
	        this.exprs();
	        this.state = 57;
	        this.match(CockroachParser.CLOSE_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_() {
	    let localctx = new IfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CockroachParser.RULE_if);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(CockroachParser.IF);
	        this.state = 60;
	        this.condition();
	        this.state = 61;
	        this.match(CockroachParser.THEN);
	        this.state = 62;
	        this.statement();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===CockroachParser.ELSE) {
	            this.state = 63;
	            this.match(CockroachParser.ELSE);
	            this.state = 64;
	            this.statement();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	proc() {
	    let localctx = new ProcContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CockroachParser.RULE_proc);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(CockroachParser.THIS);
	        this.state = 68;
	        this.id();
	        this.state = 69;
	        this.exprs();
	        this.state = 70;
	        this.match(CockroachParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CockroachParser.RULE_condition);
	    var _la = 0; // Token type
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CockroachParser.NOT) {
	                this.state = 72;
	                this.match(CockroachParser.NOT);
	            }

	            this.state = 75;
	            this.id();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CockroachParser.NOT) {
	                this.state = 76;
	                this.match(CockroachParser.NOT);
	            }

	            this.state = 79;
	            this.match(CockroachParser.EMPTY);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CockroachParser.NOT) {
	                this.state = 80;
	                this.match(CockroachParser.NOT);
	            }

	            this.state = 83;
	            this.match(CockroachParser.NUMBER);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CockroachParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(CockroachParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CockroachParser.EOF = antlr4.Token.EOF;
CockroachParser.LINE_COMMENT = 1;
CockroachParser.UP = 2;
CockroachParser.DOWN = 3;
CockroachParser.LEFT = 4;
CockroachParser.RIGHT = 5;
CockroachParser.STAY = 6;
CockroachParser.NOT = 7;
CockroachParser.EMPTY = 8;
CockroachParser.NUMBER = 9;
CockroachParser.REPEAT = 10;
CockroachParser.WHILE = 11;
CockroachParser.CHAR = 12;
CockroachParser.OPEN_BRACKET = 13;
CockroachParser.CLOSE_BRACKET = 14;
CockroachParser.IF = 15;
CockroachParser.THEN = 16;
CockroachParser.ELSE = 17;
CockroachParser.THIS = 18;
CockroachParser.END = 19;
CockroachParser.ID = 20;
CockroachParser.LETTER = 21;
CockroachParser.NUM = 22;
CockroachParser.DIGIT = 23;
CockroachParser.SPACE = 24;

CockroachParser.RULE_prog = 0;
CockroachParser.RULE_exprs = 1;
CockroachParser.RULE_expr = 2;
CockroachParser.RULE_statement = 3;
CockroachParser.RULE_repeat = 4;
CockroachParser.RULE_while = 5;
CockroachParser.RULE_group = 6;
CockroachParser.RULE_if = 7;
CockroachParser.RULE_proc = 8;
CockroachParser.RULE_condition = 9;
CockroachParser.RULE_id = 10;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CockroachParser.RULE_prog;
    }

	exprs() {
	    return this.getTypedRuleContext(ExprsContext,0);
	};

	EOF() {
	    return this.getToken(CockroachParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.exitProg(this);
		}
	}


}



class ExprsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CockroachParser.RULE_exprs;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.enterExprs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.exitExprs(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CockroachParser.RULE_expr;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	repeat() {
	    return this.getTypedRuleContext(RepeatContext,0);
	};

	while_() {
	    return this.getTypedRuleContext(WhileContext,0);
	};

	if_() {
	    return this.getTypedRuleContext(IfContext,0);
	};

	proc() {
	    return this.getTypedRuleContext(ProcContext,0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	LINE_COMMENT() {
	    return this.getToken(CockroachParser.LINE_COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.exitExpr(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CockroachParser.RULE_statement;
    }

	UP() {
	    return this.getToken(CockroachParser.UP, 0);
	};

	DOWN() {
	    return this.getToken(CockroachParser.DOWN, 0);
	};

	LEFT() {
	    return this.getToken(CockroachParser.LEFT, 0);
	};

	RIGHT() {
	    return this.getToken(CockroachParser.RIGHT, 0);
	};

	STAY() {
	    return this.getToken(CockroachParser.STAY, 0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.exitStatement(this);
		}
	}


}



class RepeatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CockroachParser.RULE_repeat;
    }

	REPEAT() {
	    return this.getToken(CockroachParser.REPEAT, 0);
	};

	NUM() {
	    return this.getToken(CockroachParser.NUM, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.enterRepeat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.exitRepeat(this);
		}
	}


}



class WhileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CockroachParser.RULE_while;
    }

	WHILE() {
	    return this.getToken(CockroachParser.WHILE, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.enterWhile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.exitWhile(this);
		}
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CockroachParser.RULE_group;
    }

	OPEN_BRACKET() {
	    return this.getToken(CockroachParser.OPEN_BRACKET, 0);
	};

	exprs() {
	    return this.getTypedRuleContext(ExprsContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(CockroachParser.CLOSE_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.exitGroup(this);
		}
	}


}



class IfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CockroachParser.RULE_if;
    }

	IF() {
	    return this.getToken(CockroachParser.IF, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	THEN() {
	    return this.getToken(CockroachParser.THEN, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(CockroachParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.enterIf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.exitIf(this);
		}
	}


}



class ProcContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CockroachParser.RULE_proc;
    }

	THIS() {
	    return this.getToken(CockroachParser.THIS, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	exprs() {
	    return this.getTypedRuleContext(ExprsContext,0);
	};

	END() {
	    return this.getToken(CockroachParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.enterProc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.exitProc(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CockroachParser.RULE_condition;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	NOT() {
	    return this.getToken(CockroachParser.NOT, 0);
	};

	EMPTY() {
	    return this.getToken(CockroachParser.EMPTY, 0);
	};

	NUMBER() {
	    return this.getToken(CockroachParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.exitCondition(this);
		}
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CockroachParser.RULE_id;
    }

	ID() {
	    return this.getToken(CockroachParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CockroachListener ) {
	        listener.exitId(this);
		}
	}


}




CockroachParser.ProgContext = ProgContext; 
CockroachParser.ExprsContext = ExprsContext; 
CockroachParser.ExprContext = ExprContext; 
CockroachParser.StatementContext = StatementContext; 
CockroachParser.RepeatContext = RepeatContext; 
CockroachParser.WhileContext = WhileContext; 
CockroachParser.GroupContext = GroupContext; 
CockroachParser.IfContext = IfContext; 
CockroachParser.ProcContext = ProcContext; 
CockroachParser.ConditionContext = ConditionContext; 
CockroachParser.IdContext = IdContext; 
