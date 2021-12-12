'use strict';

const chalk = require('chalk');
const Mocha = require('mocha');
const { parse } = require('stacktrace-parser')
const {
  EVENT_RUN_BEGIN,
  EVENT_RUN_END,
  EVENT_TEST_FAIL,
  EVENT_TEST_PASS,
  EVENT_SUITE_BEGIN,
  EVENT_SUITE_END
} = Mocha.Runner.constants;

class MyReporter {
  constructor(runner) {
    this._indents = 0;
    const stats = runner.stats;

    runner
      .once(EVENT_RUN_BEGIN, () => {
      })
      .on(EVENT_SUITE_BEGIN, (test) => {
        console.log(
          `${this.indent()}${chalk.magenta(`${test.title}`)}`
        );
        this.increaseIndent();
      })
      .on(EVENT_SUITE_END, () => {
        this.decreaseIndent();
      })
      .on(EVENT_TEST_PASS, test => {
        console.log(
          `${this.indent()}${chalk.green(`${test.title}`)}`
        );
      })
      .on(EVENT_TEST_FAIL, (test, err) => {
        console.log('Please meditate on the following code: 🧘')
        const stackParser = parse(err.stack)[0];
        console.log(
          `${this.indent()}${chalk.red(`${test.title} in ${stackParser.file}:${stackParser.lineNumber}`)}`
        );
        console.log("\n");
      })
      .once(EVENT_RUN_END, () => {
        const total = stats.passes * 100/ (stats.passes + stats.failures);
        console.log(`The Master says:`)
        if(total === 100){
          console.log(chalk.green(`  Enlightenment achieved 😇`))
        }
        else{
          console.log(chalk.cyan(`  You have not yet reached enlightenment 😌\n  Do not lose hope 🙏`))
        }
        console.log("\n");
        console.log(chalk.bgBlue(`Your progress : ${stats.passes}/${stats.passes + stats.failures} (${~~total}%)`));
        process.exit();
      });
  }

  indent() {
    return Array(this._indents).join('  ');
  }

  increaseIndent() {
    this._indents++;
  }

  decreaseIndent() {
    this._indents--;
  }
}

module.exports = MyReporter;