const { equal, match } = require('assert');

const { spawn, exec, execFile } = require('child_process');

describe('ChildProcess' , () => {
    it('#SpawningAProcess', () => {
        const ls = spawn('ls', ['-lh', '/usr']);
        ls.stdout.on('data', (data) => {
            match(data.toString(), /__/);
        });
          
        ls.on('close', (code) => {
            equal(code, __);
        });    
    });

    it('#SpawningTwoProcesses', () => { 
        // HINT: ls -l /usr | wc -l
        const ls = spawn('ls', ['-lh', '/usr']);
        const wc = spawn('wc', ['-l']); // Counts the number of lines
        ls.stdout.on('data', (data) => {
            wc.stdin.write(data.toString());
            match(data.toString(), /__/);
        });
          
        ls.on('close', (code) => {
            equal(code, __);
            wc.stdin.end();
        });

        wc.stdout.on('data', (data) => {
            equal(parseInt(data.toString()), __);
        });

        wc.on('close', (code) => {
            equal(code, __);
        });
    });

    it('#exec', () => { 
        // HINT: Append new line at end of expected string
        exec('echo "Hello World!"', (error, stdout, stderr) => {
            equal(stdout, __);
        })
    });

    /**
     * The child_process.execFile() function is similar to child_process.exec() except that it does not spawn a shell by default. 
     * Rather, the specified executable file is spawned directly as a new process making it slightly more efficient than child_process.exec().
     */
    it('#execFile', () => { 
        // HINT: Append new line at end of expected string
        execFile('node', ['--version'],(error, stdout, stderr) => {
            equal(stdout, __);
        });
    });
});
