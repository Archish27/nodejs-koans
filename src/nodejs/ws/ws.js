const { equal } = require('assert');
const wsServer = require('./server');
const { WebSocket, WebSocketServer } = require('ws');

describe('WS module' , () => {
    
    it('client sends message on server ', (done) => {
        const wss = new WebSocketServer({ port: 9200 }, () => {
            ws = new WebSocket(wsServer.url);
            ws.on('open', () => {
                ws.send('foo', () => {
                    wss.close(done);
                });
            });
        });

        wss.on('connection', (ws) => {
            ws.on('message', (msg) => {
                equal(msg.toString(), 'foo');
                ws.close();
            });
        });
    });

    it("client emits a 'ping' event", (done) => {
        const wss = new WebSocket.Server({ port: 9200 }, () => {
            const ws = new WebSocket(`ws://localhost:9200`);
            ws.on('ping', (msg) => { 
                equal(msg, 'hello')
                wss.close(done); 
            });
        });

        wss.on('connection', (ws) => {
            ws.ping('hello');
            ws.close();
        });
    });

    it("client emits a 'pong' event", (done) => {
        const wss = new WebSocket.Server({ port: 9200 }, () => {
          const ws = new WebSocket(`ws://localhost:9200`);
          ws.on('pong', (msg) => { 
                equal(msg, 'bye')
                wss.close(done); 
            });
        });
  
        wss.on('connection', (ws) => {
          ws.pong('bye');
          ws.close();
        });
    });
});
