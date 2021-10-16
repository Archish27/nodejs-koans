/**
 * The util module supports the needs of Node.js internal APIs. 
 * Many of the utilities are useful for application and module developers as well.
 * 
 */

const { equal, match } = require('assert');

const util = require('util');

async function fn() {
  return 'hello world';
}

const callbackFunction = util.callbackify(fn);

describe('Util Module' , () => {
    it('#testCallbackFunctionUsingCallbackify', () => {
        callbackFunction((err, ret) => {
            if (err) throw err;
            equal(ret, __);
        });
    });

    it('#testInspect', () => {
        const obj = {
            res: fn(),
        };
        equal(util.inspect(obj), __);
        //What will it return if JSON.stringify(obj)?
    });

    it('#testPromisify', () => {
        const sleep = util.promisify(setTimeout);
        sleep(1000, fn()).then((val) => {
            equal(resolve, __);
        });
    });
});
 