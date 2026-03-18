import { convert } from './zigzagConversion';


const tests = [
    {
        input: {
            s: 'PAYPALISHIRING',
            numRows: 3
        },
        expected: 'PAHNAPLSIIGYIR'
    },
    {
        input: {
            s: 'PAYPALISHIRING',
            numRows: 4
        },
        expected: 'PINALSIGYAHRPI'
    },
    {
        input: {
            s: 'A',
            numRows: 1
        },
        expected: 'A'
    }
];

describe('--- Zigzag Conversion ---', () => {
    tests.map(({input, expected}, idx) => {
        it(`Returns ${expected}`, () => {
            expect(convert(input.s, input.numRows)).toBe(expected);
        });
    });
})