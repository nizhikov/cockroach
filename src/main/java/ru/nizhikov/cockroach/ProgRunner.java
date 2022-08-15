package ru.nizhikov.cockroach;

import java.util.BitSet;
import java.util.HashMap;
import java.util.Map;
import org.antlr.v4.runtime.ANTLRErrorListener;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.Parser;
import org.antlr.v4.runtime.RecognitionException;
import org.antlr.v4.runtime.Recognizer;
import org.antlr.v4.runtime.atn.ATNConfigSet;
import org.antlr.v4.runtime.dfa.DFA;
import ru.nizhikov.cockroach.antlr.CockroachLexer;
import ru.nizhikov.cockroach.antlr.CockroachParser;

public class ProgRunner {
    private final Field fld;

    private final String prog;

    private final Map<String, CockroachParser.ProcContext> procs = new HashMap<>();

    private final ANTLRErrorListener errorListener = new ThrowErrorListener();

    public ProgRunner(Field fld, String prog) {
        this.fld = fld;
        this.prog = prog;
    }

    public void run() {
        CockroachLexer lexer = new CockroachLexer(CharStreams.fromString(prog));
        CockroachParser parser = new CockroachParser(new CommonTokenStream(lexer));

        parser.addErrorListener(errorListener);
        invoke(parser.prog().exprs());
    }

    private void invoke(CockroachParser.ExprsContext exprs) {
        exprs.expr().forEach(this::invoke);
    }

    private void invoke(CockroachParser.ExprContext expr) {
        if (expr.statement() != null)
            invoke(expr.statement());
        else if (expr.repeat() != null) {
            CockroachParser.RepeatContext rctx = expr.repeat();

            int cnt = Integer.parseInt(rctx.NUM().getText());

            for (int j = 0; j < cnt; j++)
                invoke(rctx.expr());
        }
        else if (expr.while_() != null) {
            CockroachParser.WhileContext wctx = expr.while_();

            while(eval(wctx.condition()))
                invoke(wctx.expr());
        }
        else if (expr.if_() != null) {
            CockroachParser.IfContext ictx = expr.if_();
            if (eval(ictx.condition()))
                invoke(ictx.statement(0));
            else
                invoke(ictx.statement(1));
        }
        else if (expr.proc() != null) {
            procs.put(expr.proc().id().getText(), expr.proc());
        }
        else if (expr.id() != null) {
            String name = expr.id().getText();
            CockroachParser.ProcContext pctx = procs.get(name);

            if (pctx == null)
                throw new RuntimeException("Unknown procedure[name=" + name + ']');

            invoke(pctx.exprs());
        }
        else
            throw new IllegalStateException("Unknown expression[cls=" + expr.getClass().getSimpleName() + ", ctx="+ expr + ']');
    }

    private void invoke(CockroachParser.StatementContext statement) {
        if (statement.group() != null) {
            CockroachParser.GroupContext gctx = statement.group();
            invoke(gctx.exprs());
        } else {
            switch (statement.start.getType()) {
                case CockroachParser.UP -> fld.up();
                case CockroachParser.DOWN -> fld.down();
                case CockroachParser.LEFT -> fld.left();
                case CockroachParser.RIGHT -> fld.right();
                case CockroachParser.STAY -> fld.stay();
                default -> throw new IllegalStateException("Unknown function[" +
                    "type=" + statement.start.getType() +
                    ", text=" + statement.start.getText() + ']');
            }
        }
    }

    private boolean eval(CockroachParser.ConditionContext condition) {
        boolean res;

        if (condition.EMPTY() != null)
            res = fld.getLastCharacter() == Field.EMPTY;
        else if (condition.id() != null) {
            String filter = condition.id().getText();

            if (filter.length() > 1)
                throw new RuntimeException("Only one letter condition supported");

            res = fld.getLastCharacter() == filter.charAt(0);
        }
        else if (condition.NUMBER() != null)
            res = fld.getLastCharacter() >= '0' && fld.getLastCharacter() <= '9';
        else
            throw new IllegalStateException("Unknown condition[ctx=" + condition + ']');

        return condition.NOT() != null ? !res : res;
    }

    private static class ThrowErrorListener implements ANTLRErrorListener {
        @Override public void syntaxError(Recognizer<?, ?> recognizer, Object offendingSymbol, int line,
            int charPositionInLine, String msg, RecognitionException e) {
            throw new RuntimeException(msg);
        }

        @Override
        public void reportAmbiguity(Parser recognizer, DFA dfa, int startIndex, int stopIndex, boolean exact,
            BitSet ambigAlts, ATNConfigSet configs) {
            throw new RuntimeException("???");
        }

        @Override public void reportAttemptingFullContext(Parser recognizer, DFA dfa, int startIndex, int stopIndex,
            BitSet conflictingAlts, ATNConfigSet configs) {
            throw new RuntimeException("!!!");
        }

        @Override public void reportContextSensitivity(Parser recognizer, DFA dfa, int startIndex, int stopIndex,
            int prediction, ATNConfigSet configs) {
            throw new RuntimeException("###");
        }
    }
}
