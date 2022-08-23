// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"daBI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = exports.EMPTY = exports.COCKROACH = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var COCKROACH = '~';
exports.COCKROACH = COCKROACH;
var EMPTY = '_';
exports.EMPTY = EMPTY;
var CAN_T_MOVE_WALL = 'Не могу!';

var Field = /*#__PURE__*/function () {
  function Field(fieldStr) {
    _classCallCheck(this, Field);

    this.fld = fieldStr.split(/\r?\n/);
    this.last = EMPTY;
    var lineWidth = this.fld[0].length;

    for (var i = 0; i < this.fld.length; i++) {
      if (lineWidth != this.fld[i].length) throw 'Lines has different length';
      if (!this.testline(this.fld[i])) throw 'Line has wrong format[' + this.fld[i] + ']';
      this.fld[i] = this.fld[i].split('');
      var idx = this.fld[i].indexOf(COCKROACH);
      if (idx == -1) continue;
      if (this.pos) throw 'Double cockroach position!';
      this.pos = [i, idx];
    }
  }

  _createClass(Field, [{
    key: "set",
    value: function set(char, i, j) {
      if (this.pos[0] == i && this.pos[1] == j) return;
      this.fld[i][j] = char.charAt(0);
      if (this.lsnr) this.lsnr();
    }
  }, {
    key: "testline",
    value: function testline(line) {
      return /^[A-Za-zА-Яа-я0-9_~]+$/.test(line);
    }
  }, {
    key: "change",
    value: function change(from_i, from_j, to_i, to_j) {
      if (this.pos[0] == to_i && this.pos[1] == to_j) return;
      if (this.pos[0] == from_i && this.pos[1] == from_j) this.pos = [to_i, to_j];
      this.fld[to_i][to_j] = this.fld[from_i][from_j];
      this.fld[from_i][from_j] = EMPTY;
      if (this.lsnr) this.lsnr();
    }
  }, {
    key: "up",
    value: function up() {
      return this.move(-1, 0);
    }
  }, {
    key: "down",
    value: function down() {
      return this.move(1, 0);
    }
  }, {
    key: "left",
    value: function left() {
      return this.move(0, -1);
    }
  }, {
    key: "right",
    value: function right() {
      return this.move(0, 1);
    }
  }, {
    key: "stay",
    value: function stay() {
      return this.move(0, 0);
    }
  }, {
    key: "move",
    value: function move(idelta, jdelta) {
      var res = Promise.resolve();
      if (this.lsnr) res = this.lsnr();
      if (idelta == 0 && jdelta == 0) return res;
      this.last = this.move0(COCKROACH, this.pos[0], this.pos[1], idelta, jdelta);
      this.pos[0] += idelta;
      this.pos[1] += jdelta;
      return res;
    }
  }, {
    key: "move0",
    value: function move0(toUp, i, j, idelta, jdelta) {
      if (i + idelta < 0 || i + idelta >= this.fld.length) {
        console.log(this.toString());
        throw CAN_T_MOVE_WALL;
      }

      if (j + jdelta < 0 || j + jdelta >= this.fld[0].length) {
        console.log(this.toString());
        throw CAN_T_MOVE_WALL;
      }

      var possiblyEmpty = this.fld[i + idelta][j + jdelta];
      if (possiblyEmpty != EMPTY) this.move0(possiblyEmpty, i + idelta, j + jdelta, idelta, jdelta);
      this.fld[i][j] = EMPTY;
      this.fld[i + idelta][j + jdelta] = toUp;
      return possiblyEmpty;
    }
  }, {
    key: "onChange",
    value: function onChange(lsnr) {
      this.lsnr = lsnr;
      this.lsnr();
    }
  }, {
    key: "toString",
    value: function toString() {
      var res = "";

      for (var i = 0; i < this.fld.length; i++) {
        if (i != 0) res += "\n";
        res += this.fld[i].join("");
      }

      return res;
    }
  }, {
    key: "width",
    value: function width() {
      return this.fld[0].length;
    }
  }, {
    key: "height",
    value: function height() {
      return this.fld.length;
    }
  }]);

  return Field;
}();

exports.Field = Field;
},{}]},{},["daBI"], null)
//# sourceMappingURL=field.6bf66d2b.js.map