const parser = "babel";

function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  return (
    root
      .find(j.CallExpression)
      .forEach((path) => {
        j(path).replaceWith(
          "myCustomLogger('log', 'Hello world!')"
        );
      })
      .toSource()
  );
}

module.exports = transformer
module.exports.parser = parser
