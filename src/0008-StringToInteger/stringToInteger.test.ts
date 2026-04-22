import { myAtoi } from "./stringToInteger";

const tests = [
    {
        input: "42",
        expected: 42
    },
    {
        input: "   -042",
        expected: -42
    },
    {
        input: "1337c0d3",
        expected: 1337
    },
    {
        input: "0-1",
        expected: 0
    },
    {
        input: "words and 987",
        expected: 0
    }
];

describe('--- String to Integer ---', () => {
    tests.map(({input, expected}, idx) => {
        it(`Returns ${expected}`, () => {
            expect(myAtoi(input)).toStrictEqual(expected);
        })
    })
})