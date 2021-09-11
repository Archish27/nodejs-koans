
const { equal } = require('assert');

const { FOO, fooBarMethod, BAR } = require('./foo');

describe('Modules' , () => {
    it('#testModuleVariable', () => {
        equal(__, FOO);
    });

    it('#testModuleMethod', () => {
        equal(__, fooBarMethod());
    });

    it('#testAccessingModule', () => {
        equal(__, BAR); 
    });
});
