/**
 * JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. 
 * A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
 * 
 * A Promise exists in one of these states:
 * Pending: initial state, neither fulfilled nor rejected.
 * Fulfilled: operation completed successfully.
 * Rejected: operation failed.
 * 
 * Promise API
 * There are 4 static methods in the Promise class:
 * Promise.resolve
 * Promise.reject
 * Promise.all
 * Promise.race
 */

const { equal } = require('assert');

const basic =  (result) => {
    if (result == undefined) {
        return Promise.reject('Failure');
    }

    return new Promise((resolve, reject) => {
        // Assume that this below data is retrieved from Database which takes 1.6 seconds.
        setTimeout(() => resolve(result), 1600);
    });
}

describe('Promises' , () => {
    it('#should do something with promises', () => {
        equal(typeof basic, __)
    });

    it('should return error message', () => {
        return basic().then(() => {}, (message) => {
            equal(message, __);
        });
    });

    it('should return success message', () => {
        return basic('Success').then((message) => {
            equal(message, __);
        });
    });
});
