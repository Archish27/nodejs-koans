
const { equal } = require('assert');

describe('RegularExpression' , () => {
    
    it('#testCreateRegEx', () => {
        const re = new RegExp('ab+c', 'i')
        equal(__, typeof re);
    });

    it('#testARegexpCanSearchAStringForMatchingContent', () => {
        const s = 'Please yes make my day!'
        equal(__, s.match(/yes.*day/));
    });

    it('#testARegexpCanSearchAStringForMatchingContent', () => {
        const re = /(\w+)\s(\w+)/
        const str = 'John Smith'
        const newstr = str.replace(re, '$2, $1')
        equal(__, newstr)
    });
});
