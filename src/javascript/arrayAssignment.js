
const { equal, deepEqual } = require('assert');

describe('ArrayAssignment' , () => {
    it('#testArrays', () => {
        const array = ["John", "Smith"];
        deepEqual(__, array);
    });

    it('#testSpreadingArrays', () => {
        const array = ["John", "Smith"];
        const newValue = "Doe";
        deepEqual(__, [...array, newValue]);
    });
    
    it('#testSortArrays', () => {
        const array = ["John", "Smith", "Doe", "Arnold"];
        array.sort()
        deepEqual(__, array);
    });
   
    it('#testIncludesArrays', () => {
        const array = ["John", "Smith", "Doe", "Arnold"];
        equal(__, array.includes('Arnold'));
        equal(__, array.includes('Mary'));
    });
   
    it('#testReverseArrays', () => {
        const array = ["John", "Smith", "Doe", "Arnold"];
        array.reverse();
        deepEqual(__, array); 
    });
   
});
