function double(x) {
  return x * 2;
}

// Private functions should be un-exported
export function _triple(x) {
  return x * 3;
}

// public exported functions should still be able to access un-exported functions
export function timesSix(x) {
  return double(_triple(x));
}

// default exports should be available, whatever its name
export default function _none(x) {
  return 'hello';
}

// Regular CommonJS-style declarations should be untouched
exports.oldStylePublic = function _privateName(x) {
  return x * x;
}

exports._oldStylePrivate = function publicName(x) {
  return x * 4;
}
