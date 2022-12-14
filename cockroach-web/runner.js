import CockroachLexer from "./CockroachLexer.js"
import CockroachParser from "./CockroachParser.js";
import InputStream from "antlr4/src/antlr4/InputStream.js";
import CommonTokenStream from "antlr4/src/antlr4/CommonTokenStream.js"
import {Field, EMPTY} from './field.js';

export class ProgRunner {
    constructor(fld, prog, debug) {
        this.fld = fld;
        this.prog = prog;
        this.procs = {};
        this.prev = null;
        this.next = null;
        this.delay = 500;
        this.debug = debug;
    }

    run() {
        var lexer = new CockroachLexer(new InputStream(this.prog));
        var parser = new CockroachParser(new CommonTokenStream(lexer));

        return this.invokeExprs(parser.prog().exprs());
    }

    invokeExprs(exprs) {
        var runner = this;

        var cnt = exprs.expr().length;
        var idx = 1;
        var runner = this;

        var promise = runner.invokeExpr(exprs.expr(0));

        for (var i=1; i<exprs.expr().length; i++) 
            promise = promise.then(() => {
                var expr = exprs.expr(idx);
                idx++;
                return runner.invokeExpr(expr);
            });

        return promise;
    }

    invokeExpr(expr) {
        if (expr.statement())
            return this.invokeStatement(expr.statement());
        else if (expr.repeat() != null) {
            var rctx = expr.repeat();

            var cnt = parseInt(rctx.NUM().getText());

            if (cnt == 0)
                return this.withDelay(() => {}, 0); 

            var runner = this;
            var promise = runner.invokeExpr(rctx.expr());

            for (var i = 1; i < cnt; i++)
                promise = promise.then(() => {
                    return runner.invokeExpr(rctx.expr());
                });

            return promise;
        }
        else if (expr.while_() != null) {
            var wctx = expr.while_();
            var runner = this;

            var continuation = () => {
                var res = runner.eval(wctx.condition());
                var res_is_promise = res.then && typeof res.then === 'function';

                if (res_is_promise)
                    return res;
                else if (res)
                    return runner.invokeExpr(wctx.expr()).then(continuation);
                
                return runner.withDelay(() => {}, 0); 
            }

            return continuation();
        }
        else if (expr.if_() != null) {
            var ictx = expr.if_();
            var res = this.eval(ictx.condition());
            var res_is_promise = res.then && typeof res.then === 'function';

            if (res_is_promise)
                return res;
            else if (res)
                return this.invokeStatement(ictx.statement(0));
            else
                return this.invokeStatement(ictx.statement(1));
        }
        else if (expr.proc() != null) {
            var runner = this;
            return this.withDelay(() => {
                runner.procs[expr.proc().id().getText()] =  expr.proc();
            }, 0);
        }
        else if (expr.id() != null) {
            var name = expr.id().getText();
            var pctx = this.procs[name];

            if (pctx == null)
                return Promise.reject({msg: 'Unknown procedure[name=' + name + ']', token : expr});

            return this.invokeExprs(pctx.exprs());
        }
        else
            return Promise.reject({msg: "Unknown expression[expr="+ expr.getText() + ']', token: expr});
    }

    invokeStatement(statement) {
        if (statement.group() != null) {
            return this.invokeExprs(statement.group().exprs());
        } else {
            return this.withDelay(() => { 
                this.prev = this.next;
                this.next = statement;

                var tt = statement.start.type;

                if (tt == CockroachParser.UP)
                    return this.fld.up();
                else if (tt == CockroachParser.DOWN)
                    return this.fld.down();
                else if (tt == CockroachParser.LEFT)
                    return this.fld.left();
                else if (tt == CockroachParser.RIGHT)
                    return this.fld.right();
                else if (tt == CockroachParser.STAY)
                    return this.fld.stay();
                else 
                    return Promise.reject({ msg: "Unknown function[" +
                        "type=" + tt +
                        ", text=" + statement.getText() + ']', token : statement });
            });
        }
    }

    eval(condition) {
        var res;

        if (condition.EMPTY() != null)
            res = this.fld.last == EMPTY;
        else if (condition.id() != null) {
            var filter = condition.id().getText();

            if (filter.length > 1)
                throw "Only one letter condition supported";

            res = this.fld.last == filter.charAt(0);
        }
        else if (condition.NUMBER() != null)
            res = this.fld.last >= '0' && this.fld.last <= '9';
        else
            throw "Unknown condition[ctx=" + condition + ']';

        return condition.NOT() != null ? !res : res;
    }

    withDelay(func, delay) {
        if (!delay)
            delay = this.delay;

        return new Promise((resolve, reject) => { 
            setTimeout(() => {
                try {
                    resolve(func());
                }
                catch (err) {
                    reject({msg: err});
                }
            }, delay);
        });
    }
}