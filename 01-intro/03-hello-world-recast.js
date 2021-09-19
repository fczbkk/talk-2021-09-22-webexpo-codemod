const recast = require('recast')
const builder = recast.types.builders

const result = builder.callExpression(
  builder.memberExpression(
    builder.identifier('console'),
    builder.identifier('log')
  ),
  [
    builder.literal('Hello world!')
  ]
)

console.log(
  recast.print(result).code
)
