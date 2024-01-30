#! /usr/bin/env node
"use strict";

var _prettify = _interopRequireDefault(require("@liquify/prettify"));
var _xml2js = require("xml2js");
var _fs = require("fs");
var _path = require("path");
var _yargs = _interopRequireDefault(require("yargs/yargs"));
var _helpers = require("yargs/helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var chalk = require("chalk");
var log = console.log;
var argv = (0, _yargs["default"])((0, _helpers.hideBin)(process.argv)).argv;
var source = argv.source,
  dest = argv.dest,
  _argv$indent = argv.indent,
  indent = _argv$indent === void 0 ? 4 : _argv$indent,
  _argv$format = argv.format,
  format = _argv$format === void 0 ? true : _argv$format,
  _argv$ignore = argv.ignore,
  ignore = _argv$ignore === void 0 ? "" : _argv$ignore,
  _argv$sortDir = argv.sortDir,
  sortDir = _argv$sortDir === void 0 ? 'asc' : _argv$sortDir;
var parseXMLFile = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var pathXML, data, parsedXMLData, fileData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          pathXML = _ref.pathXML, data = _ref.data;
          parsedXMLData = {};
          if (!(pathXML && !(0, _fs.existsSync)(pathXML))) {
            _context.next = 6;
            break;
          }
          console.error(chalk.redBright("file path not exits"));
          _context.next = 23;
          break;
        case 6:
          if (!(!data && !pathXML)) {
            _context.next = 10;
            break;
          }
          console.error(chalk.redBright("please put any valid file path or xml file data."));
          _context.next = 23;
          break;
        case 10:
          if (!(pathXML && (0, _fs.existsSync)(pathXML))) {
            _context.next = 19;
            break;
          }
          log(chalk.cyanBright("\n---------XML file sorting started-------\n"));
          log(chalk.green("\n---------XML file \n".concat(pathXML, "\n-------\n")));
          fileData = (0, _fs.readFileSync)(pathXML, "utf-8");
          _context.next = 16;
          return new Promise(function (resolve) {
            (0, _xml2js.parseString)(fileData, function (err, result) {
              if (err) throw err;
              resolve(result);
            });
          });
        case 16:
          parsedXMLData = _context.sent;
          _context.next = 23;
          break;
        case 19:
          if (!data) {
            _context.next = 23;
            break;
          }
          _context.next = 22;
          return new Promise(function (resolve) {
            (0, _xml2js.parseString)(data, function (err, result) {
              if (err) throw err;
              resolve(result);
            });
          });
        case 22:
          parsedXMLData = _context.sent;
        case 23:
          return _context.abrupt("return", parsedXMLData);
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function parseXMLFile(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var createXML = function createXML(obj, xmlPath, intent) {
  var format = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var builder = new _xml2js.Builder({
    xmldec: {
      version: "1.0",
      encoding: "UTF-8"
    }
  });
  var xmlData = builder.buildObject(obj);
  log("\n---------XML file sorted-------\n");
  log(chalk.magentaBright("\n---------Updating XML changes in destination path ".concat((0, _path.resolve)(__dirname, xmlPath), "----------\n")));
  if (!(0, _fs.existsSync)((0, _path.resolve)(__dirname, xmlPath))) {
    (0, _fs.createWriteStream)((0, _path.resolve)(__dirname, xmlPath), "utf-8");
    _prettify["default"].format(xmlData, {
      language: "XML",
      indentSize: intent || 4,
      markup: {
        forceAttribute: format
      }
    }).then(function (output) {
      (0, _fs.writeFileSync)((0, _path.resolve)(xmlPath), output, "utf-8");
    })["catch"](function () {
      return xmlData;
    });
  } else {
    _prettify["default"].format(xmlData, {
      language: "XML",
      indentSize: 4,
      markup: {
        forceAttribute: true
      }
    }).then(function (output) {
      (0, _fs.writeFileSync)((0, _path.resolve)(xmlPath), output, "utf-8");
    })["catch"](function () {
      return xmlData;
    });
  }
};
var sortXMLAttribute = function sortXMLAttribute(DATA) {
  var KEYS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var ignoreKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  if (KEYS && !Array.isArray(DATA) && KEYS.length) {
    KEYS.forEach(function (mainKey) {
      if (DATA[mainKey] && Object.keys(DATA[mainKey]).length) {
        if (mainKey === "$") {
          var elements = Object.keys(DATA[mainKey]);
          var arr = elements.map(function (itemAtrr) {
            if (itemAtrr.includes(ignoreKey)) {
              return "abc_".concat(itemAtrr);
            }
            return itemAtrr;
          }).sort(function (a, b) {
            if (sortDir === 'desc') {
              return b.localeCompare(a);
            }
            return a.localeCompare(b);
          });
          var cloneData = _objectSpread({}, DATA[mainKey]);
          DATA[mainKey] = {};
          arr.map(function (itemAtrr) {
            if (itemAtrr.includes("abc_")) {
              return itemAtrr.replace("abc_", "");
            }
            return itemAtrr;
          }).forEach(function (keyAtt) {
            DATA[mainKey][keyAtt] = cloneData[keyAtt];
          });
        } else if (DATA[mainKey] && Array.isArray(DATA[mainKey])) {
          var isValidObj = DATA[mainKey][0];
          if (_typeof(isValidObj) === "object") {
            DATA[mainKey] = DATA[mainKey].map(function (childObj) {
              var childKeys = Object.keys(childObj);
              sortXMLAttribute(childObj, childKeys, ignoreKey);
              return childObj;
            });
          } else {
            DATA[mainKey] = DATA[mainKey];
          }
        } else {
          Object.keys(DATA[mainKey]).forEach(function (keyName) {
            if (keyName === "$") {
              var _elements = Object.keys(DATA[mainKey].$);
              var _arr = _elements.map(function (itemAtrr) {
                if (itemAtrr.includes(ignoreKey)) {
                  return "abc_".concat(itemAtrr);
                }
                return itemAtrr;
              }).sort(function (a, b) {
                if (sortDir === 'desc') {
                  return b.localeCompare(a);
                }
                return a.localeCompare(b);
              });
              var _cloneData = _objectSpread({}, DATA[mainKey].$);
              DATA[mainKey].$ = {};
              _arr.map(function (itemAtrr) {
                if (itemAtrr.includes("abc_")) {
                  return itemAtrr.replace("abc_", "");
                }
                return itemAtrr;
              }).forEach(function (keyAtt) {
                DATA[mainKey].$[keyAtt] = _cloneData[keyAtt];
              });
            } else if (DATA[mainKey][keyName] && Array.isArray(DATA[mainKey][keyName])) {
              var _isValidObj = DATA[mainKey][keyName][0];
              if (_typeof(_isValidObj) === "object") {
                DATA[mainKey][keyName] = DATA[mainKey][keyName].map(function (childObj) {
                  var childKeys = Object.keys(childObj);
                  sortXMLAttribute(childObj, childKeys, ignoreKey);
                  return childObj;
                });
              } else {
                DATA[mainKey][keyName] = DATA[mainKey][keyName];
              }
            }
          });
        }
      }
    });
  }
};
var xmlPath = [];
var getAllXMLFiles = function getAllXMLFiles(dir, isNew) {
  if (isNew) {
    xmlPath = [];
  }
  var mainDir = (0, _path.resolve)(dir);
  var files = (0, _fs.readdirSync)(mainDir, {
    encoding: "utf-8",
    recursive: true
  });
  files.forEach(function (fileName) {
    var stats = (0, _fs.statSync)(fileName);
    if (stats.isDirectory()) {
      // loop it again
      getAllXMLFiles((0, _path.join)(mainDir, fileName), false);
    } else {
      var ext = (0, _path.extname)(fileName);
      if (ext === ".xml") {
        xmlPath.push((0, _path.join)(mainDir, fileName));
      }
    }
  });
};

// command line sort xml
var currentDir = process.cwd();
if (!source && currentDir) {
  getAllXMLFiles(currentDir, true);
  if (xmlPath.length) {
    log(chalk.green("Total xml files found ".concat(xmlPath.length)));
    log(chalk.greenBright("XML sorting started....."));
    xmlPath.forEach(function (filePath) {
      log(chalk.magentaBright("".concat(filePath, "\n")));
      var destinationFile = filePath;
      parseXMLFile({
        pathXML: filePath
      }).then(function (xmlParsedData) {
        var mainKeys = Object.keys(xmlParsedData);
        sortXMLAttribute(xmlParsedData, mainKeys, ignore);
        createXML(xmlParsedData, destinationFile, indent, format);
      });
    });
  } else {
    log(chalk.redBright("Total xml files found ".concat(xmlPath.length)));
  }
} else if (source) {
  var destinationFile = dest || source;
  parseXMLFile({
    pathXML: source
  }).then(function (xmlParsedData) {
    var mainKeys = Object.keys(xmlParsedData);
    sortXMLAttribute(xmlParsedData, mainKeys, ignore);
    createXML(xmlParsedData, destinationFile, indent, format);
  });
}
