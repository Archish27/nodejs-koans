/**
 *  
 * URL strings and URL objects#
 * 
 * A URL string is a structured string containing multiple meaningful components. When parsed, a URL object is returned containing properties for each of these components.
 * 
 * The url module provides two APIs for working with URLs: a legacy API that is Node.js specific, and a newer API that implements the same WHATWG URL Standard used by web browsers.
 * 
 *  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
 *  │                                              href                                              │
 *  ├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
 *  │ protocol │  │        auth         │          host          │           path            │ hash  │
 *  │          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
 *  │          │  │                     │    hostname     │ port │ pathname │     search     │       │
 *  │          │  │                     │                 │      │          ├─┬──────────────┤       │
 *  │          │  │                     │                 │      │          │ │    query     │       │
 *  "  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
 *  │          │  │          │          │    hostname     │ port │          │                │       │
 *  │          │  │          │          ├─────────────────┴──────┤          │                │       │
 *  │ protocol │  │ username │ password │          host          │          │                │       │
 *  ├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
 *  │   origin    │                     │         origin         │ pathname │     search     │ hash  │
 *  ├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
 *  │                                              href                                              │
 *  └────────────────────────────────────────────────────────────────────────────────────────────────┘
 *  (All spaces in the "" line should be ignored. They are purely for formatting.)
 */


const { equal, match } = require('assert');

describe('URL' , () => {
    it('#testUrlParsing', () => {
        const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
        equal(myURL.pathname, __);
        equal(myURL.search, __);
        equal(myURL.hash, __);
        equal(myURL.href, __);
        equal(myURL.origin, __);
    });
});
