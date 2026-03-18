import { reverseInteger } from './reverseInteger';

const tests = [
    {
        input: 123,
        expected: 321
    },
    {
        input: -123,
        expected: -321
    },
    {
        input: 120,
        expected: 21
    }
];

describe('--- Reverse Integer ---', () => {
    tests.map(({input, expected}, idx) => {
        it(`Returns ${expected}`, () => {
            expect(reverseInteger(input)).toStrictEqual(expected);
        })
    })
})