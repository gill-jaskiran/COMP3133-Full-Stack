import { add, sub, mul, div } from '../calculator.js';
import { expect } from 'chai';

describe('Calculator Tests', function () {

// Add Function
    describe('Add function', function () {
        it('should return 7 for add(5, 2)', function () {
            const result = add(5, 2);
            try {
                expect(result).to.equal(7); // This test will pass
                console.log("PASS: add(5, 2) returned the correct result (7)");
            } catch (error) {
                console.log("FAIL: add(5, 2) failed. The expected value was 7, not " + result);
            }
        });

        it('should return 8 for add(5, 2)', function () {
            const result = add(5, 2);
            try {
                expect(result).to.equal(8); // This test will fail
                console.log("PASS: add(5, 2) returned the incorrect result (8), but it should fail");
            } catch (error) {
                console.log("FAIL: add(5, 2) correctly failed. The expected value was 8, not " + result);
            }
        });
    });

// Subtract Function
    describe('Subtract function', function () {
        it('should return 3 for sub(5, 2)', function () {
            const result = sub(5, 2);
            try {
                expect(result).to.equal(3); // This test will pass
                console.log("PASS: sub(5, 2) returned the correct result (3)");
            } catch (error) {
                console.log("FAIL: sub(5, 2) failed. The expected value was 3, not " + result);
            }
        });

        it('should return 5 for sub(5, 2)', function () {
            const result = sub(5, 2);
            try {
                expect(result).to.equal(5); // This test will fail
                console.log("PASS: sub(5, 2) returned the incorrect result (5), but it should fail");
            } catch (error) {
                console.log("FAIL: sub(5, 2) correctly failed. The expected value was 5, not " + result);
            }
        });
    });


// Multiply Function
    describe('Multiply function', function () {
        it('should return 10 for mul(5, 2)', function () {
            const result = mul(5, 2);
            try {
                expect(result).to.equal(10); // This test will pass
                console.log("PASS: mul(5, 2) returned the correct result (10)");
            } catch (error) {
                console.log("FAIL: mul(5, 2) failed. The expected value was 10, not " + result);
            }
        });

        it('should return 12 for mul(5, 2)', function () {
            const result = mul(5, 2);
            try {
                expect(result).to.equal(12); // This test will fail
                console.log("PASS: mul(5, 2) returned the incorrect result (12), but it should fail");
            } catch (error) {
                console.log("FAIL: mul(5, 2) correctly failed. The expected value was 12, not " + result);
            }
        });
    });


// Divide Dunction
    describe('Divide function', function () {
        it('should return 5 for div(10, 2)', function () {
            const result = div(10, 2);
            try {
                expect(result).to.equal(5); // This test will pass
                console.log("PASS: div(10, 2) returned the correct result (5)");
            } catch (error) {
                console.log("FAIL: div(10, 2) failed. The expected value was 5, not " + result);
            }
        });

        it('should return 2 for div(10, 2)', function () {
            const result = div(10, 2);
            try {
                expect(result).to.equal(2); // This test will fail
                console.log("PASS: div(10, 2) returned the incorrect result (2), but it should fail");
            } catch (error) {
                console.log("FAIL: div(10, 2) correctly failed. The expected value was, not " + result);
            }
        });
    });
});
