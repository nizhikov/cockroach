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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ru.nizhikov.cockroach.antlr.CockroachLexer;
import ru.nizhikov.cockroach.antlr.CockroachParser;

public class ProgRunner {
    private static final Logger LOG = LoggerFactory.getLogger(ProgRunner.class.getName());

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
        for (int i = 0; i < exprs.getChildCount(); i++) {
            if (exprs.getChild(i) instanceof CockroachParser.ExprContext ectx) { // Filter out TerminalNodeImpl.
                LOG.info("InvocationOf[ctx=" + ectx + ']');

                invoke(ectx);
            }
        }
    }

    private void invoke(CockroachParser.StatementContext sctx) {
        if (sctx.group() != null) {
            CockroachParser.GroupContext gctx = sctx.group();
            invoke(gctx.exprs());
        } else {
            switch (sctx.start.getType()) {
                case CockroachParser.UP -> fld.up();
                case CockroachParser.DOWN -> fld.down();
                case CockroachParser.LEFT -> fld.left();
                case CockroachParser.RIGHT -> fld.right();
                case CockroachParser.STAY -> fld.stay();
                default -> throw new IllegalStateException("Unknown function[" +
                    "type=" + sctx.start.getType() +
                    ", text=" + sctx.start.getText() + ']');
            }
        }
    }

    private void invoke(CockroachParser.ExprContext ectx) {
        if (ectx.statement() != null)
            invoke(ectx.statement());
        else if (ectx.repeat() != null) {
            CockroachParser.RepeatContext rctx = ectx.repeat();

            int cnt = Integer.parseInt(rctx.NUM().getText());

            for (int j = 0; j < cnt; j++)
                invoke(rctx.expr());
        }
        else if (ectx.while_() != null) {
            CockroachParser.WhileContext wctx = ectx.while_();

            while(eval(wctx.condition()))
                invoke(wctx.expr());
        }
        else if (ectx.if_() != null) {
            CockroachParser.IfContext ictx = ectx.if_();
            if (eval(ictx.condition()))
                invoke(ictx.statement(0));
            else
                invoke(ictx.statement(1));
        }
        else if (ectx.proc() != null) {
            procs.put(ectx.proc().id().getText(), ectx.proc());
        }
        else if (ectx.id() != null) {
            String name = ectx.id().getText();
            CockroachParser.ProcContext pctx = procs.get(name);

            if (pctx == null)
                throw new RuntimeException("Unknown procedure[name=" + name + ']');

            invoke(pctx.exprs());
        }
        else
            throw new IllegalStateException("Unknown expression[cls=" + ectx.getClass().getSimpleName() + ", ctx="+ ectx + ']');
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
