jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

defineTest(__dirname, 'custom-logger', null, 'simple');
defineTest(__dirname, 'custom-logger', null, 'not-console-log');
defineTest(__dirname, 'custom-logger', null, 'console-info');
defineTest(__dirname, 'custom-logger', null, 'statement');
defineTest(__dirname, 'custom-logger', null, 'multiple-parameters');
defineTest(__dirname, 'custom-logger', null, 'not-a-call');
