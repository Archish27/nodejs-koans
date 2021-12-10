
const { equal, deepEqual } = require('assert');

describe('Strings' , () => {

    it('#testCreatePrimitiveStringObject', () => {
        const anyValue = new String("Hello World");
        equal(__, typeof anyValue === 'object');
    });

    it('#testDoubleQuotedStringsAreStrings', () => {
        const anyValue = "Hello World";
        equal(__, typeof anyValue === 'string');
    });

    it('#testSingleQuotedStringsAreAlsoStrings', () => {
        const anyValue = 'Hello World';
        equal(__, typeof anyValue === 'string');
    });

    it('#testUseSingleQuotesToCreateStringWithDoubleQuotes', () => {
        const anyValue = 'He said, "Go Away."';
        equal(__, anyValue);
    });

    it('#testUseDoubleQuotesToCreateStringsWithSingleQuotes', () => {
        const anyValue = "Don't";
        equal(__, anyValue);
    });

    it('#testUseBackslashForThoseHardCases', () => {
        const a = "He said, \"Don't\"";
        const b = 'He said, "Don\'t"'
        equal(__, a === b)
    });

    it('#testPlusWillConcatenateTwoStrings', () => {
        const string = "Hello, " + "World";
        equal(__, string)
    });
        
    it('#testPlusConcatenationWillLeaveTheOriginalStringsUnmodified', () => {
        const hi = "Hello, ";
        const there = "World"
        const string = hi + there; 
        equal(__, hi);
        equal(__, there);
    });

    it('#testLongString', () => {
        const longString = "This is a very long string which needs \
                            to wrap across multiple lines because \
                            otherwise my code is unreadable."
        equal(__, longString.split("\n").length);
    });

    // EXCERSIE
    // How string interpolation is done in JavaScript?
    // What is backtick used for in strings?

    it('#testStringsCanBeJoined', () => {
        const words = ["Now", "is", "the", "time"]
        equal(__, words.join(" "));
    });

    it('#testStringsCanBeSplitWithDifferentPatterns', () => {
        const string = "the:rain:in:spain"
        const words = string.split(/:/)
        deepEqual(__, words);
    });
});
