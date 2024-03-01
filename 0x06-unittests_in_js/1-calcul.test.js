const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should add two rounded numbers', function() {
            assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    describe('SUBTRACT', function() {
        it('should subtract the second rounded number from the first', function() {
            assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE', function() {
        it('should divide the first rounded number by the second', function() {
            assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" if the rounded second number is 0', function() {
            assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });
});
