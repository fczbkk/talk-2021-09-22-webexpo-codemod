/**
 * @fileoverview Use `myCustomLogger` instead of `console`.
 * @author fczbkk
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Use `myCustomLogger` instead of `console`.',
      category: 'Fill me in',
      recommended: false
    },
    fixable: 'code',  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function (context) {
    const source = context.getSourceCode().text

    function isConsoleMethod (node) {
      return (
        node
        && node.callee
        && node.callee.object
        && node.callee.type === 'MemberExpression'
        && node.callee.object.name === 'console'
      )
    }

    function convertConsoleCall (node) {
      return `myCustomLogger('${node.callee.property.name}', ${node.arguments.map((argument) => {
        return source.substring(argument.range[0], argument.range[1])
      })})`
    }

    return {
      CallExpression (node) {
        if (isConsoleMethod(node)) {
          context.report({
            node,
            message: 'Use `myCustomLogger` instead of `console`.',
            fix (fixer) {
              return fixer.replaceText(node, convertConsoleCall(node))
            }
          })
        }
      }
    }
  }
}
