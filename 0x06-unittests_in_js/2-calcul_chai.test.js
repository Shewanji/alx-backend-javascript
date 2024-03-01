const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

// Using the "expect" style of Chai
const expect = chai.expect;

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should add two rounded numbers', function() {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('SUBTRACT', function() {
        it('should subtract the second rounded number from the first', function() {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe('DIVIDE', function() {
        it('should divide the first rounded number by the second', function() {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" if the rounded second number is 0', function() {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });
});
