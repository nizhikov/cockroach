import {Field, EMPTY, COCKROACH} from './field';
import { ProgRunner } from './runner';

var field = 
    "_____\n" +
    "_____\n" +
    "А1А1_\n" +
    "~____";

var is_run_active = false;
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
};

$(document).ready(function () {
    initField();

    $('#exec').click(function () {
        if (is_run_active)
            return;
        
        field = f.toString();

        $('#exec').addClass('disabled');
        is_run_active = true;

        runner = new ProgRunner(f, $("#prog-text").val());
        runner.run().then(() => {
            is_run_active = false;
            $('#exec').removeClass('disabled');
        }, (err) => {
            $('#err-msg').html(err);
            $('#err-msg').show();
        });
    });

    $('#reset-field').click(initField);
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
