const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
    it('should return a successful response from the API', function(done) {
        getPaymentTokenFromAPI(true)
            .then(response => {
                assert.deepStrictEqual(response, { data: 'Successful response from the API' });
                done();
            })
            .catch(error => {
                done(error); // Call done with error if promise is rejected
            });
    });
});
