const parser = 'babel'

function isConsoleMethod (node) {
  return (
    node
    && node.callee
    && node.callee.object
    && node.callee.type === 'MemberExpression'
    && node.callee.object.name === 'console'
  )
}

function transformer (file, api) {
  const j = api.jscodeshift
  const root = j(file.source)

  return (
    root
      .find(j.CallExpression, isConsoleMethod)
      .forEach((path) => {
        j(path).replaceWith(
          "myCustomLogger('log', 'Hello world!')"
        )
      })
      .toSource()
  )
}

module.exports = transformer
module.exports.parser = parser
