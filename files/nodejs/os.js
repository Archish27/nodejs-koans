/**
 *  
 * The os module provides operating system-related utility methods and properties.
 * 
 * For more details refer os module - https://nodejs.org/docs/latest/api/os.html
 */


const { equal } = require('assert');

const os = require('os');

describe('OS' , () => {
    it('#testOs', () => {
        equal(os.arch(), __);
        equal(os.platform(), __);
        equal(os.cpus().length, __)
    });
});
