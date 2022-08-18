import {Field, EMPTY, COCKROACH} from './field';
import { ProgRunner } from './runner';

var field = 
    "_____\n" +
    "_____\n" +
    "А1А1_\n" +
    "~____";

var is_run_active = false;
var is_debug = false;
var debug_promise_resolve;
var f = new Field(field);
var runner;

var draw = function() {
    var root = $("#field");
    var colsz = Math.round(root.width() / f.fld[0].length);

    root.width(colsz * f.fld[0].length).height(colsz * f.fld.length);

    var html = "";
    var style = "style='width:" + colsz + "px; height:" + colsz + "px; line-height:" + colsz + "px'";

    for (var i=0; i<f.fld.length; i++) {
        html += "<div class='field-row'>";

        for (var j=0; j<f.fld[i].length; j++) {
            if (f.fld[i][j] == EMPTY) 
                html += "<div i=" + i + " j=" + j + " class='field-empty field-col' " + style + ">&nbsp;</div>";
            else if (f.fld[i][j] == COCKROACH)
                html += "<div i=" + i + " j=" + j + " class='field-cockroach field-col' " + style + ">&nbsp;</div>";
            else 
                html += "<div i=" + i + " j=" + j + " class='field-letter field-col' " + style + ">" + f.fld[i][j] + "</div>";
        }

        html += "</div>";
    }

    html += "</tbody></table>"

    root.html(html);

    var prev = 'Пусто';
    var next = 'Пусто';

    if (runner) {
        if (runner.prev)
            prev = runner.prev.getText();

        if (runner.next)
            next = runner.next.getText();
    }

    $('#prev-command').val(prev);
    $('#next-command').val(next);
    $('#last-char').val(f.last);

    if (is_debug) {
        return new Promise(function (resolve, reject) {
            debug_promise_resolve = resolve;
        });
    }

    return Promise.resolve();
};

var initField = () => {
    f = new Field(field);
    f.onChange(draw);

    is_run_active = false;
    $('#exec').removeClass('disabled');
    $('#prev-command').val('Пусто');
    $('#next-command').val('Пусто');
    $('#last-char').val(EMPTY);
    $('#err-msg').hide();

    $('#field-width').val(f.width());
    $('#field-height').val(f.height());
};

$(document).ready(function () {
    initField();

    $('#exec, #debug').click(function () {
        if (is_run_active)
            return;
        
        field = f.toString();

        is_run_active = true;
        is_debug = $(this).attr('id') == 'debug';

        $('#exec').addClass('disabled');
        $('#reset').addClass('disabled');
        $('#debug').addClass('disabled');

        if (is_debug)
            $('#next-step').removeClass('disabled');

        runner = new ProgRunner(f, $("#prog-text").val(), is_debug);

        runner.run().then(() => {
            setTimeout(draw, runner.delay);

            is_run_active = false;
            is_debug = false;
            $('#next-step').addClass('disabled');

            $('#exec').removeClass('disabled');
            $('#reset').removeClass('disabled');
            $('#debug').removeClass('disabled');
        }, (err) => {
            $('#err-msg').html(err);
            $('#err-msg').show();

            $('#next-step').addClass('disabled');

            $('#exec').removeClass('disabled');
            $('#reset').removeClass('disabled');
            $('#debug').removeClass('disabled');
        });
    });

    $('#reset').click(initField);

    $('#next-step').click(function () {
        debug_promise_resolve();
    });

    $('#set-field-size').click(function () {
        var width = $('#field-width').val();
        var height = $('#field-height').val();

        var new_field = "";

        for (var i=0; i<height; i++) {
            new_field += i == 0 ? COCKROACH : EMPTY;
            new_field += EMPTY.repeat(width -1 );

            if (height - i > 1)
                new_field += '\n';
        }

        field = new_field;

        initField();
    });

});

$(document).on('click', function (e) {
    if ($(e.target).hasClass('field-col'))
        return;

    $('.field-col').removeClass('red');
});

$(document).on('click', '.field-col', function () {
    if ($('.field-col.red').length == 0 || $('.field-col.field-empty.red').length == 1) {
        $('.field-col').removeClass('red');
        $(this).addClass('red');
    } else {
        f.change(
            parseInt($('.field-col.red').attr('i')),
            parseInt($('.field-col.red').attr('j')),
            parseInt($(this).attr('i')), 
            parseInt($(this).attr('j'))
        );

        $('.field-col').removeClass('red');
    }
});

$(document).keypress(function (e) {
    if ($('.field-col.red').length == 0)
        return;

    var char = String.fromCharCode(e.keyCode);

    if (!f.testline(char))
        return;

    f.set(
        char,
        parseInt($('.field-col.red').attr('i')),
        parseInt($('.field-col.red').attr('j')),
    );
});