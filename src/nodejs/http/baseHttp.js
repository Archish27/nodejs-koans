const http = require('http');
 
/**
 * !! DO NOT MODIFY THIS FILE !!
 */
class HttpServer {
    constructor(){
        this.start = this.start.bind(this);
        this.close = this.close.bind(this);
        this.url = "http://localhost:8080"
    }

    start() {
        this.server = http.createServer((req, res) => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('Hello World!');
            res.end();
        }).listen(8080);
    }

    close(){
        this.server.close();
    }
}

module.exports = new HttpServer();
