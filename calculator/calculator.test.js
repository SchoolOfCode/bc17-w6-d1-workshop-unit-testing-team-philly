import { test, expect  } from 'vitest'

import { calculate } from './calculator.JS'

test("calculator makes good adding", () => {
    expect(calculate(5, 7)).toBe(12)
});
