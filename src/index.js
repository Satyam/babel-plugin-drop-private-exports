
export default function ({ types: t }) {
  function isPrivate(id) {
    return t.isIdentifier(id) && id.name.charAt(0) === '_';
  }
  return {
    visitor: {
      ExportNamedDeclaration(path) {
        const dec = path.node.declaration;
        if (dec) {
          if (
            (t.isFunctionDeclaration(dec) && isPrivate(dec.id)) ||
            (t.isClassDeclaration(dec) && isPrivate(dec.id)) ||
            (t.isVariableDeclaration(dec) &&
              dec.declarations.every(v =>
                t.isVariableDeclarator(v) && isPrivate(v.id)
              )
            )
          ) {
            path.replaceWith(dec);
          }
        } else {
          path.traverse({
            ExportSpecifier(spec) {
              if (isPrivate(spec.node.exported)) {
                spec.remove();
              }
            }
          })
        }
      },
    },
  };
}
