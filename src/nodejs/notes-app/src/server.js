
/**
 * EXPECTED GOAL:
 * Create Express server of notes app by setting config & routes.
 * 
 * HINT: Refer how to create express server.
 * 
 * Once done, head to config.js & router.js respectively.
 */

// Import Express package
const config = require('./config');
const router = require('./router');

/**
 * Creates a notes application express server having start & close method to spawn & destroy server respectively.
 */
class Server {
    constructor(){
        this.start = this.start.bind(this);
        this.close = this.close.bind(this);
    }

    /**
     * Start Server
     * 
     * 1. Initialize Express
     * 2. Set Config
     * 3. Set Router
     * 4. Listen Server on port 9000
     */
    start() {
        
    }

    /**
     * Close Server
     */
    close(){
        
    }
}

module.exports = new Server();