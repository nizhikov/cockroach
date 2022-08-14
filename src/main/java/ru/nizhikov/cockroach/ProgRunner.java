package ru.nizhikov.cockroach;

import java.util.BitSet;
import org.antlr.v4.runtime.ANTLRErrorListener;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.Parser;
import org.antlr.v4.runtime.RecognitionException;
import org.antlr.v4.runtime.Recognizer;
import org.antlr.v4.runtime.atn.ATNConfigSet;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.tree.ParseTree;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ru.nizhikov.cockroach.antlr.CockroachLexer;
import ru.nizhikov.cockroach.antlr.CockroachParser;

public class ProgRunner {
    private static final Logger LOG = LoggerFactory.getLogger(ProgRunner.class.getName());

    private final Field fld;

    private final String prog;

    private final ANTLRErrorListener errorListener = new ThrowErrorListener();

    public ProgRunner(Field fld, String prog) {
        this.fld = fld;
        this.prog = prog;
    }

    public void run() {
        CockroachLexer lexer = new CockroachLexer(CharStreams.fromString(prog));
        CockroachParser parser = new CockroachParser(new CommonTokenStream(lexer));

        parser.addErrorListener(errorListener);

        CockroachParser.ExprsContext exprs = (CockroachParser.ExprsContext)parser.prog().getChild(0);

        for (int i = 0; i < exprs.getChildCount(); i++) {
            ParseTree expr = exprs.getChild(i);

            if (!(expr instanceof CockroachParser.ExprContext)) // Filter out TerminalNodeImpl.
                continue;

            ParseTree invoke = expr.getChild(0);

            LOG.info("InvocationOf[ctx=" + invoke + ']');

            if (invoke instanceof CockroachParser.FunctionContext fctx)
                invoke(fctx);
            else if (invoke instanceof CockroachParser.RepeatContext rctx) {

                int cnt = Integer.parseInt(rctx.NUM().getText());

                for (int j = 0; j < cnt; j++)
                    invoke(rctx.function());
            }
        }
    }

    private void invoke(CockroachParser.FunctionContext ctx) {
        switch (ctx.start.getType()) {
            case CockroachParser.UP -> fld.up();
            case CockroachParser.DOWN -> fld.down();
            case CockroachParser.LEFT -> fld.left();
            case CockroachParser.RIGHT -> fld.right();
            case CockroachParser.STAY -> fld.stay();
            default ->
                throw new IllegalStateException("Unknown function[type=" + ctx.start.getType() + ", text=" + ctx.start.getText() + ']');
        }
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
