//👉 Write your tests below here:
import { stringSquareAndSum } from "./main.js";
import { test, expect } from "@jest/globals";


test(`stringSquareAndSumTest1`, () => {
    const actual = stringSquareAndSum("abcd");
    const expected = 30;
  expect(actual).toStrictEqual(expected);
})

test(`stringSquareAndSumTest2`, () => {
    const actual = stringSquareAndSum("coding");
    const expected = 576;
  expect(actual).toBe(expected);
})

test(`stringSquareAndSumTest3`, () => {
    const actual = stringSquareAndSum("WinTer");
    const expected = 1555;
  expect(actual).toBe(expected);
})

test(`stringSquareAndSumTest4`, () => {
    const actual = stringSquareAndSum("SchoolOfCode");
    const expected = 1564;
  expect(actual).toBe(expected);
})
