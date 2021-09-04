
const { equal, deepEqual } = require('assert');

describe('Arrays' , () => {
    it('#testCreatingArrays', () => {
        const anyValue = [];
        equal('__', typeof anyValue);
        equal(__, anyValue.length);
    });

    it('#testArrayLiterals', () => {
        const anyValue = [];
        equal('__', typeof anyValue);

        anyValue[0] = 1;
        equal(__, anyValue.length);
        
        anyValue[1] = 2;
        deepEqual([__, __], anyValue);
    });

    it('#testAccessingArrayElements', () => {
        const array = ['peanut', 'butter', 'and', 'jelly'];

        equal(__, array[0]);
        equal(__, array.length);
        equal(__, array[2]);
    });

    it('#testAccessingArrayElements', () => {
        const array = ['peanut', 'butter', 'and', 'jelly'];
        
        deepEqual(__, array.slice(0, 1));
        deepEqual(__, array.slice(0, 2));
        deepEqual(__, array.slice(2, 2));
        deepEqual(__, array.slice(1, 10));
        deepEqual(__, array.slice(10, 1));
        deepEqual(__, array.slice(-2));
    });

    it('#testShiftingArrays', () => {
        const array = ['peanut', 'butter', 'and', 'jelly'];
    
        equal(__, array.shift());
        equal(__, array.length);
        equal(__, array.shift());
        
        array.unshift('nut');
        equal(__, array.length);
        deepEqual(__, array);
    });

    it('#testPushingAndPoppingArrays', () => {
        const array = ['peanut', 'butter', 'and', 'jelly'];
    
        array.push('nut');
        equal(__, array.length);
        deepEqual(__, array);
        equal(__, array.pop());
        deepEqual(__, array);
    });
        
});
