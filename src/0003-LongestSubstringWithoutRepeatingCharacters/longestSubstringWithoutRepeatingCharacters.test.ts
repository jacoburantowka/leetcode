import { lengthOfLongestSubstring } from "./longestSubstringWithoutRepeatingCharacters";

const tests = [
    {
        input: "abcabcbb",
        expected: 3
    },
    {
        input: "bbbbb",
        expected: 1
    },
    {
        input: "pwwkew",
        expected: 3
    },
    {
        input: "au",
        expected: 2
    },
    {
        input: "",
        expected: 0
    },
    {
        input: "g",
        expected: 1
    }
];

describe('--- Longest Substring Without Repeating Characters ---', () => {
    tests.map(({input, expected}, idx) => {
        it(`Returns ${expected}`, () => {
            expect(lengthOfLongestSubstring(input)).toBe(expected);
        });
    });
})