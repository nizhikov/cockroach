export const COCKROACH = '~';
export const EMPTY = '_';
var CAN_T_MOVE_WALL = 'Can\'t move wall';

export class Field {
    constructor(fieldStr) {
        this.fld = fieldStr.split(/\r?\n/);
        this.last = EMPTY;

        var lineWidth = this.fld[0].length;

        for (var i=0; i<this.fld.length; i++) {
            if (lineWidth != this.fld[i].length)
                throw 'Lines has different length';
            
            if (!/^[A-Za-zА-Яа-я0-9_~]+$/.test(this.fld[i]))
                throw 'Line has wrong format['+ this.fld[i] + ']';

            this.fld[i] = this.fld[i].split('');

            var idx = this.fld[i].indexOf(COCKROACH);
            if (idx == -1)
                continue;

            if (this.pos)
                throw 'Double cockroach position!';

            this.pos = [i, idx];
        }
    }

    up() {
        this.move(-1, 0);
    }

    down() {
        this.move(1, 0);
    }

    left() {
        this.move(0, -1);
    }

    right() {
        this.move(0, 1);
    }

    stay() {
        this.move(0, 0);
    }

    move(idelta, jdelta) {
        if (idelta == 0 && jdelta == 0) 
            return;

        this.last = this.move0(COCKROACH, this.pos[0], this.pos[1], idelta, jdelta);

        this.pos[0] += idelta;
        this.pos[1] += jdelta;

        if (this.lsnr)
            this.lsnr();
    }

    move0(toUp, i, j, idelta, jdelta) {
        if (i + idelta < 0 || i + idelta >= this.fld.length)
            throw CAN_T_MOVE_WALL + this.toString();

        if (j + jdelta < 0 || j + jdelta >= this.fld[0].length) 
            throw CAN_T_MOVE_WALL + this.toString();

        var possiblyEmpty = this.fld[i + idelta][j + jdelta];

        if (possiblyEmpty != EMPTY)
            this.move0(possiblyEmpty, i + idelta, j + jdelta, idelta, jdelta);

        this.fld[i][j] = EMPTY;
        this.fld[i + idelta][j + jdelta] = toUp;

        return possiblyEmpty;
    }

    onChange(lsnr) {
        this.lsnr = lsnr;

        this.lsnr();
    }

    toString() {
        var res = "";

        for (var i=0; i<this.fld.length; i++) {
            if (i != 0)
                res += "\n";
            res += this.fld[i].join("");
        }

        return res;
    }
}