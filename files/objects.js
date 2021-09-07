
const { equal, match } = require('assert');
describe('Objects' , () => {
    it('#testObjectTypes', () => {
        const anyValue = {
            a: 1,
            b: 'string',
            c: 1.1
        };
        equal(__, typeof anyValue);
        equal(__, typeof anyValue.a);
        equal(__, typeof anyValue.b);
        equal(__, typeof anyValue.c);
    });

    it('#testObjectsCanBeConvertedToString', () => {
        const anyValue = {
            a: 1,
            b: 'string',
            c: 1.1
        };
        equal(__, anyValue.a.toString());
        equal(__, anyValue.b.toString());
        equal(__, anyValue.c.toString());
    });

    it('#testObjectsCanBeCompared', () => {
        const anyValue = {
            a: 1,
            b: 'string',
            c: 1.1
        };
        const cloneValue = anyValue
        equal(__, anyValue === cloneValue); 
    });
});
