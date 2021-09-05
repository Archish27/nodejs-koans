const { equal } = require('assert');

const GLOBAL = "I am global";
const AGE = 4;
class Person{
    getAge(){
        return AGE;
    }
}

class Teacher extends Person{
    
    constructor(){
        super();
        this.AGE = 10;
    }

    getAge(){
        return AGE;
    }
}

describe('Constants' , () => {
    const GLOBAL = "I am nested global";
    var ANOTHER_GLOBAL = "I am another global";
    it('#testNestedConstants', () => { 
        equal(__, GLOBAL);
    });

    it('#testGlobalConstantsEnclosingInClasses', () => { 
        equal(__, new Person().getAge());
    });

    it('#testConstantsUsingInheritance', () => { 
        equal(__, new Teacher().getAge());
    });

    it('#testConstantsInitialization', () => { 
        try {
            GLOBAL = 10; // Throws error "Assignment to constant variable."
        } catch (error) {
            equal(__, error.message);
        }

        ANOTHER_GLOBAL = 10;
        equal(__ ,ANOTHER_GLOBAL);
    });

    it.only('#testConstantsScope', () => { 
        let GLOBAL = 10;
        equal(__ ,GLOBAL);
    });
});
