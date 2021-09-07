
const { quadrilateral } = require('./quadrilaterals');
const { equal } = require('assert');

describe('QuadrilateralsProject' , () => {
    it('#testIfRectangle', () => {
        equal(rectangle, quadrilateral(4,4,4,4));
        equal(rectangle, quadrilateral(2,10,2,10));
    });

    it('#testIfSquare', () => {
        equal(square, quadrilateral(2,2,2,2));
        equal(square, quadrilateral(5,5,5,5));
    });

    it('#testIfScalene', () => {
        equal(scalene, quadrilateral(2,2,2,2));
        equal(scalene, quadrilateral(5,6,7,8));
    });
});
