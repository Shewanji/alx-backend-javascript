const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
    it('should return the sum of rounded numbers', function() {
        assert.equal(calculateNumber(1, 3), 4);
        assert.equal(calculateNumber(1, 3.7), 5);
        assert.equal(calculateNumber(1.2, 3.7), 5);
        assert.equal(calculateNumber(1.5, 3.7), 6);
		assert.equal(calculateNumber(-1.7, -2), -4);
        assert.equal(calculateNumber(1, -2), -1);
        assert.equal(calculateNumber(-1, -2.7), -4)
    });
});
