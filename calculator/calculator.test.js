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
    expect(calculate(3,"%", 4)).toBe(`Unsupported operator ${operator}`)
});

test("calculator makes good subtracting", () => {
    expect(calculate(1, "-", 10)).toBe(-9)
});