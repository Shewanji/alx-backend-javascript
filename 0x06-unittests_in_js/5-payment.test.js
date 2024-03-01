const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
    let consoleLogSpy;

    beforeEach(function() {
        // Spy on console.log
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        // Restore the spy
        consoleLogSpy.restore();
    });

    it('should log the correct message when totalAmount = 100 and totalShipping = 20', function() {
        sendPaymentRequestToApi(100, 20);
        assert(consoleLogSpy.calledOnce);
        assert(consoleLogSpy.calledWithExactly('The total is: 120'));
    });

    it('should log the correct message when totalAmount = 10 and totalShipping = 10', function() {
        sendPaymentRequestToApi(10, 10);
        assert(consoleLogSpy.calledOnce);
        assert(consoleLogSpy.calledWithExactly('The total is: 20'));
    });
});
