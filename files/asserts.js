const { equal } = require('assert');

describe('Asserts' , () => {
    it('#testAssertTruth', () => {
        equal(__, true); // This should be true
    });

    it('#testAssertWithMessage', () => {
        equal(__, 'This should be true -- Please fix this');
    });

    it('#testAssertEquality', () => {
        expectedValue = 2
        actualValue = 1 + 1
        equal(__, expectedValue);
    });

    it('#testABetterWayOfAssertingEquality', () => {
        equal(__, 1 + 1);
    });
});
