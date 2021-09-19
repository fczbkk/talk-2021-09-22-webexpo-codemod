const parser = 'babel'

function transformer (file, api) {
  const j = api.jscodeshift
  const root = j(file.source)

  return (
    root
      .find(
        j.CallExpression,
        { callee: { type: "MemberExpression", object: { name: "console" } } }
      )
      .forEach((path) => {
        const type = path.node.callee.property.name;
        const args = path.node.arguments;

        j(path).replaceWith(
          j.callExpression(
            j.identifier("myCustomLogger"),
            [j.literal(type), ...args]
          )
        )
      })
      .toSource()
  )
}

module.exports = transformer
module.exports.parser = parser
