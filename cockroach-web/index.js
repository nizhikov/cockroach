import {Field, EMPTY, COCKROACH} from './field';
import { ProgRunner } from './runner';

var simpleField = 
    "_____\n" +
    "_____\n" +
    "А1А1_\n" +
    "~____";
/*
var simpleField = 
    "__________\n" +
    "__________\n" +
    "__КОТ_____\n" +
    "__~_______\n" +
    "__________";
*/

$(document).ready( function () {
    var f = new Field(simpleField);
    var root = $("#field");

    f.onChange(function() {
        var colsz = Math.round(root.width() / f.fld[0].length);

        root.width(colsz * f.fld[0].length).height(colsz * f.fld.length);

        var html = "";
        var style = "style='width:" + colsz + "px; height:" + colsz + "px; line-height:" + colsz + "px'";

        for (var i=0; i<f.fld.length; i++) {
            html += "<div class='field-row'>";

            for (var j=0; j<f.fld[i].length; j++) {
                if (f.fld[i][j] == EMPTY) 
                    html += "<div class='field-empty field-col' " + style + ">&nbsp;</div>";
                else if (f.fld[i][j] == COCKROACH)
                    html += "<div class='field-cockroach field-col' " + style + ">&nbsp;</div>";
                else 
                    html += "<div class='field-letter field-col' " + style + ">" + f.fld[i][j] + "</div>";
            }

            html += "</div>";
        }

        html += "</tbody></table>"

        root.html(html);
    });

    $('#exec').click(function () {
        var runner = new ProgRunner(f, $("#prog-text").val());
        runner.run().then(() => setTimeout(() => f.stay(), runner.delay));
    });
});
