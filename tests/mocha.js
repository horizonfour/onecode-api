const path = require('path');
const glob = require('glob');
const chalk = require('chalk');
const Mocha = require('mocha');

// this function receives another function and test it to see if it's throws the expected error
global.assertFuncThrows = async (expectedError, fun, ...context) => {
  try {
    await fun(...context);
    throw new Error(`Should have thrown ${expectedError}, but succeded`);
  } catch (e) {
    if (e.name != expectedError) {
      throw e;
    }
  }
};

async function test() {
  console.info();
  console.info('Bootstrapping basic components...');
  console.info();

  let mocha = new Mocha();

  // Find files for testing
  let testFiles = glob.sync('../lib/tests/*Test.js');
  console.log(testFiles);
  testFiles = testFiles.map(file => path.join('lib/test', file));

  // Add files to mocha
  testFiles.forEach(mocha.addFile.bind(mocha));

  // Default passes to 0, in case there is only syncronous tests running
  let stats = { passes: 0 };

  // Run tests and save stats
  stats = mocha.run(function(failures) {
    // Exits if less then 10 tests are being run (in case .only is used)
    if (!failures && stats.passes < 5) {
      console.error(chalk.red('Falha nos testes:'));
      console.error(chalk.red(' - Verificar `describe.only` nos testes'));
      console.log();
      return process.exit(1);
    }

    process.exit(!!failures);
  }).stats;

  // creating some helpers
  Object.defineProperty(Array.prototype, 'elToString', {
    enumerable: false,
    value: function(compare) {
      return this.sort().map(s => s.toString());
    },
  });
}

process.on('unhandledRejection', e => {
  console.error('Unhandled Rejection');
  console.error(e.stack);
  process.exit(1);
});

test();
