import { test, expect  } from 'vitest';

import { calculate } from './calculator.JS';

test("calculator makes good adding", () => {
    expect(calculate(5, "+", 7)).toBe(12)
});

test("calculator makes good subtracting", () => {
    expect(calculate(1, "-", 10)).toBe(-9)
});

test("calculator makes good multiplying", () => {
    expect(calculate(15, "*", 10)).toBe(150)
});

test("calculator makes good dividing", () => {
    expect(calculate(1, "/", 10)).toBe(1/10)
});

test("calculator makes good squaring", () => {
    expect(calculate(3,"sq")).toBe(9)
});

test("calculator makes good squaring", () => {
    expect(calculate(3,"sq", 5)).toBe(9)
});

test("calculator does default throw", () => {

    // This time, we are testing our default which should throw an error.
    // so, we need to create it as a function which throws an error, so that 
    // we can test the error throwing function which passes if an error is thrown.
    expect(() => (calculate(3,"%", 4)).toThrow(new Error(`Unsupported operator %`)));
});

