
/**
 * EXPECTED GOAL:
 * Just initialize notes router here.
 * 
 * HINT: Refer creation of base router.
 * 
 * Head to ./routes/notes.js
 */

const base = require('./routes/base');

module.exports = app => {
    app.use("/", base);
    //Initialize notes endpoint 
    //HINT: Require notes from ./routes/notes.js and use it with notes enpoint
};