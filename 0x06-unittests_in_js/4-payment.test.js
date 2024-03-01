const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(function() {
        // Stub Utils.calculateNumber to always return 10
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        // Spy on console.log
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        // Restore the stub and spy
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });

    it('should call Utils.calculateNumber with the correct arguments', function() {
        sendPaymentRequestToApi(100, 20);
        assert(calculateNumberStub.calledWithExactly('SUM', 100, 20));
    });

    it('should log the correct message', function() {
        sendPaymentRequestToApi(100, 20);
        assert(consoleLogSpy.calledWithExactly('The total is: 10'));
    });
});
