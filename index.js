'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var t = _ref.types;

  function isPrivate(id) {
    return t.isIdentifier(id) && id.name.charAt(0) === '_';
  }
  return {
    visitor: {
      ExportNamedDeclaration: function ExportNamedDeclaration(path) {
        var dec = path.node.declaration;
        if (dec) {
          if (t.isFunctionDeclaration(dec) && isPrivate(dec.id) || t.isClassDeclaration(dec) && isPrivate(dec.id) || t.isVariableDeclaration(dec) && dec.declarations.every(function (v) {
            return t.isVariableDeclarator(v) && isPrivate(v.id);
          })) {
            path.replaceWith(dec);
          }
        } else {
          path.traverse({
            ExportSpecifier: function ExportSpecifier(spec) {
              if (isPrivate(spec.node.exported)) {
                spec.remove();
              }
            }
          });
        }
      }
    }
  };
};
