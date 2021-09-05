const { equal } = require('assert');

function globalMethod(a, b){
    return a + b;
}

function getScore(a, b) {
  
    function add() {
      return (a + b);
    }
  
    return add();
}

function globalDefaultArguments(a, b = 20) {
    return a + b;
}

var pet = function(name) {   // The outer function defines a variable called "name"
    var getName = function() {
      return name;             // The inner function has access to the "name" variable of the outer
                               //function
    }
    return getName;            // Return the inner function, thereby exposing it to outer scopes
}

function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
}

class Person{
    constructor(age){
        this.age = age;
    }

    getAge(){
        return this.age += 10;
    }
}

describe('Functions' , () => {
    it('#testCallingGlobalMethods', () => { 
        equal(__, globalMethod(10, 20));
    });

    it('#testCallingGlobalMethodsWithWrongNumberOfArguments', () => {
        equal(__, isNaN(globalMethod(10,20, 30)));
    });


    it('#testCallingGlobalMethodsWithWrongNumberOfArguments', () => {
        equal(__, isNaN(globalMethod(10)));
    });

    it('#testCallingNestedFunction', () => {
        equal(__, getScore(10,20));
    });

    it('#testCallingDefaultArguments', () => {
        equal(__, globalDefaultArguments(40));
    });

    it('#testCallingClosure', () => {
        const myPet = pet('Tony');
        equal(__, myPet());
    });

    it('#testCallingRestParameters', () => {
        equal(__, multiply(2, 1, 2, 3));
    });

    it('#testCallingClassMethod', () => {
        equal(__, new Person(10).getAge());
    });
});
