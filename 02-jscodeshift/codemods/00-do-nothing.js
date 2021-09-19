const parser = 'babel'

function transformer (file, api) {
  const j = api.jscodeshift
  const root = j(file.source)

  return (
    root.toSource()
  )
}

module.exports = transformer
module.exports.parser = parser
