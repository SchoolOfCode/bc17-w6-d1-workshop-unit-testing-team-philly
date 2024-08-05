import { test, expect  } from 'vitest'

// Get Test and Expect method from Vitest

import { sum } from './sum.JS'

// const input = sum(5, 7)

test('adds 5 + 7 to equal 12', () => {
    expect(sum(5, 7)).toBe(12)
});