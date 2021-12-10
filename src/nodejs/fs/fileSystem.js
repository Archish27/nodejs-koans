/**
*  The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
*/

const { equal } = require('assert');
const { 
    readFileSync, 
    writeFileSync,
    appendFileSync,
    existsSync,
    copyFileSync,
} = require('fs');

describe('fileSystem' , () => {
    it('#testToReadFromFileSynchronous', () => {
        const data = readFileSync('./files/sample.txt');
        equal(data, __);
    });

    it('#testToWriteToFileSynchronous', () => {
        writeFileSync('./files/sample1.txt', 'Hello from write fs');
        const data = readFileSync('./files/sample1.txt');
        equal(data.toString(), __);
    });

    it('#testWheatherFileExists', () => {
        const data = existsSync('./files/sample1.txt');
        equal(data, __);
    });

    it('#testToAppendToFileSynchronous', () => {
        writeFileSync('./files/sample2.txt', 'Hello from write fs');
        appendFileSync('./files/sample2.txt', '\nHello from append fs');
        const data = readFileSync('./files/sample2.txt');
        equal(data.toString(), __);
    });
    
    it('#testToCopyFile', () => {
        copyFileSync('./files/sample.txt', './files/copyFile.txt');
        equal(existsSync('./files/copyFile.txt'), __);
    });

    /**
     * Q. What is the difference between writeFile & writeFileSync?
     */
});
