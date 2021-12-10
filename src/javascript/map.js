
const { equal } = require('assert');
describe('Map' , () => {
    it('#testCreatingMap', () => {
        const map = new Map();
        equal(__, typeof map === 'object');
        equal(__, map.size);
    });

    it('#testAccessingMap', () => {
        const map = new Map();

        map.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})

        equal(__, map.has('Jessie'));
        equal(__, map.get('Hilary'));
        map.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})

        equal(__, map.delete('Raymond'));
        equal(__, map.delete('Jessie'));
        equal(__, map.size)
    });


    it('#testCombiningHashes', () => {
        const first = new Map([
            [1, 'one'],
            [2, 'two'],
            [3, 'three'],
        ]);

        const second = new Map([
            [1, 'uno'],
            [2, 'dos']
        ]);

        const merged = new Map([...first, ...second])
          
        equal(__, merged.get(1))
        equal(__, merged.get(2))
        equal(__, merged.get(3))
    });

    it('#testClearingHash', () => {
        const first = new Map([
            [1, 'one'],
            [2, 'two'],
            [3, 'three'],
        ]);
          
        equal(__, first.size);

        first.clear();
        equal(__, first.size)
    });
   
});
