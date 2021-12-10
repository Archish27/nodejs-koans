const { equal } = require('assert');
const httpServer = require('./baseHttp');
const http = require('http');

describe('HTTP module' , () => {
    beforeEach(() => {
        instance = httpServer.start();
    });

    afterEach((done) => {
        httpServer.close();
        instance = null;
        done();
    });

    it('#testHTTPServer', (done) => {
        http.get(httpServer.url, (res) => {
            let messageStr = '';
            let statusCode
            res.on('data', (message) => {
                messageStr += message.toString();
                statusCode = res.statusCode;
            });
            res.on('end', () => {
                equal(messageStr, __)
                equal(statusCode, __)
                done();
            });
        });
    });
});
