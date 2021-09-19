/**
 * @fileoverview Use `myCustomLogger` instead of `console`.
 * @author fczbkk
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/logger.js'),

  RuleTester = require('eslint').RuleTester


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('logger', rule, {

  valid: [
    'log(\'Hello world!\')'
  ],

  invalid: [
    {
      code: 'console.log(\'Hello world!\')',
      output: 'myCustomLogger(\'log\', \'Hello world!\')',
      errors: [{
        message: 'Use `myCustomLogger` instad of `console`.',
        type: 'CallExpression'
      }]
    }
  ]
})
