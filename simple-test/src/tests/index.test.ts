import { describe, expect, it} from '@jest/globals';
import {sum, multiply} from '../index';

describe("Checking for Sum ", () => {

    it('Sum of 4 and 7', () => {
        const finalAnswer = sum(4,7);
        expect(finalAnswer).toBe(11);
    });
})

describe("Checking for Multiply ", () => {

    it('multiple of 4 and 7', () => {
        const finalAnswer = multiply(4,7);
        expect(finalAnswer).toBe(28);
    });
})