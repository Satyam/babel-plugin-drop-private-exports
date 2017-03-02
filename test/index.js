var assert = require('assert');

describe('functions', function () {
  var functions;
  before(function() {
    functions = require('./output/functions.js');
  });
  it('check function visibility', function () {
    assert.ok(functions instanceof Object, 'Import should be an object');
    assert.equal(typeof functions.timesSix, 'function', 'timesSix should be a function');
    assert.equal(typeof functions._triple, 'undefined', '_triple should not be visible');
    assert.equal(typeof functions.double, 'undefined', 'double was never exported');
    assert.equal(typeof functions.default, 'function', 'default export should still be accessible');
    assert.equal(typeof functions.oldStylePublic, 'function', 'CommonJS style export should be unaffected');
    assert.equal(typeof functions._oldStylePrivate, 'function', 'private CommonJS style export should be unaffected');
    assert.equal(Object.keys(functions).length, 4, 'there should be nothing else');
  });
  it('public function should still be able to access private ones', function () {
    assert.equal(functions.timesSix(3), 18, 'timesSix should multiply argument by six');
    assert.equal(functions.default(), 'hello', 'default export should return value');
    assert.equal(functions.oldStylePublic(3), 9, 'CommonJS style export should work');
    assert.equal(functions._oldStylePrivate(8), 32, 'private CommonJS style export should work');
  });
});

describe('variables', function () {
  var variables;
  before(function() {
    variables = require('./output/variables.js');
  });
  it('check variable visibility', function () {
    assert.ok(variables instanceof Object, 'Import should be an object');
    assert.equal(variables.c11, 11, 'c11 should be 11');
    assert.equal(variables.v12, 12, 'v12 should be 12');
    assert.equal(variables.l13, 13, 'l13 should be 13');
    assert.equal(Object.keys(variables).length, 3, 'there should be only 3 exports');
  });
});

describe('arrow functions', function () {
  var arrows;
  before(function() {
    arrows = require('./output/arrows.js');
  });
  it('check arrow functions visibility', function () {
    assert.ok(arrows instanceof Object, 'Import should be an object');
    assert.equal(typeof arrows.visible, 'function', 'visible should be accessible');
    assert.equal(typeof arrows.default, 'function', 'default should be accessible no matter its name');
    assert.equal(typeof arrows._invisible, 'undefined', '_invisible should not be available');
    assert.equal(Object.keys(arrows).length, 2, 'there should be only 2 exports');
  });
  it('check arrow functions results', function() {
    assert.equal(arrows.visible(2), 12, 'visible should access the private function');
    assert.equal(arrows.default(5), 25, 'default should square the argument');
  });
});

describe('classes', function () {
  var classes;
  before(function () {
    classes = require('./output/classes.js');
  });
  it('check classes visibility', function () {
    assert.ok(classes instanceof Object, 'Import should be an object');
    assert.equal(typeof classes.PublicClass, 'function', 'PublicClass should be accessible');
    assert.equal(typeof classes.PublicExtendedClass, 'function', 'PublicExtendedClass should be accessible');
    assert.equal(Object.keys(classes).length, 2, 'there should be only 2 exports');
  });
  it('check PublicClass', function() {
    var p = new classes.PublicClass(3);
    assert.equal(p.value, 3, 'value getter should return initialization value');
  });
  it('check PublicExtendedClass', function() {
    var p = new classes.PublicExtendedClass(3);
    assert.equal(p.timesThriceFactor(5), 45, 'method on public class should still be able to access private class');
  });
});

describe('exports', function () {
  var exports;
  before(function() {
    exports = require('./output/exports.js');
  });
  it('check variable visibility', function () {
    assert.ok(exports instanceof Object, 'Import should be an object');
    assert.equal(exports.C_15, 15, 'C_15 should be 15');
    assert.equal(exports.C_18, 18, 'C_18 should be 18');
    assert.equal(Object.keys(exports).length, 2, 'there should be only 2 exports');
  });
});
