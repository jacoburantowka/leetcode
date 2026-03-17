import { longestPalindrome } from "./longestPalindromicSubstring";

const testExamples = [
    {
        input: 'babad',
        expected: 'bab'
    },
    {
        input: 'cbbd',
        expected: 'bb'
    },
    {
        input: 'c',
        expected: 'c'
    },
    {
        input: 'eeee',
        expected: 'eeee'
    },
    {
        input: 'abc',
        expected: 'a'
    },
    {
        input: 'abcdefeg',
        expected: 'efe'
    }
];

describe('--- Longest Palindromic Substring ---', () => {
    testExamples.map(({input, expected}, idx) => {
        it(`Returns ${expected}`, () => {
            expect(longestPalindrome(input)).toBe(expected);
        });
    });
})