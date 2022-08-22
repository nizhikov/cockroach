export const COCKROACH = '~';
export const EMPTY = '_';
var CAN_T_MOVE_WALL = 'Не могу!';

export class Field {
    constructor(fieldStr) {
        this.fld = fieldStr.split(/\r?\n/);
        this.last = EMPTY;

        var lineWidth = this.fld[0].length;

        for (var i=0; i<this.fld.length; i++) {
            if (lineWidth != this.fld[i].length)
                throw 'Lines has different length';
            
            if (!this.testline(this.fld[i]))
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

    set(char, i, j) {
        if (this.pos[0] == i && this.pos[1] == j)
            return;
        
        this.fld[i][j] = char.charAt(0);

        if (this.lsnr)
            this.lsnr();
    }

    testline(line) {
        return /^[A-Za-zА-Яа-я0-9_~]+$/.test(line);
    }

    change(from_i, from_j, to_i, to_j) {
        if (this.pos[0] == to_i && this.pos[1] == to_j)
            return;

        if (this.pos[0] == from_i && this.pos[1] == from_j)
            this.pos = [to_i, to_j];

        this.fld[to_i][to_j] = this.fld[from_i][from_j];
        this.fld[from_i][from_j] = EMPTY;

        if (this.lsnr)
            this.lsnr();
    }

    up() {
        return this.move(-1, 0);
    }

    down() {
        return this.move(1, 0);
    }

    left() {
        return this.move(0, -1);
    }

    right() {
        return this.move(0, 1);
    }

    stay() {
        return this.move(0, 0);
    }

    move(idelta, jdelta) {
        var res = Promise.resolve();

        if (this.lsnr)
            res = this.lsnr();

        if (idelta == 0 && jdelta == 0) 
            return res;

        this.last = this.move0(COCKROACH, this.pos[0], this.pos[1], idelta, jdelta);

        this.pos[0] += idelta;
        this.pos[1] += jdelta;

        return res;
    }

    move0(toUp, i, j, idelta, jdelta) {
        if (i + idelta < 0 || i + idelta >= this.fld.length) {
            console.log(this.toString());
            throw CAN_T_MOVE_WALL;
        }

        if (j + jdelta < 0 || j + jdelta >= this.fld[0].length)  {
            console.log(this.toString());
            throw CAN_T_MOVE_WALL;
        }

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

    width() {
        return this.fld[0].length;
    }

    height() {
        return this.fld.length;
    }
}