import { lengthOfLongestSubstring } from "./longestSubstringWithoutRepeatingCharacters";

describe('--- Longest Substring Without Repeating Characters ---', () => {
    const longestSubstringExamples = [
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

    longestSubstringExamples.map(({input, expected}, idx) => {
        it(`Returns ${expected}`, () => {
            expect(lengthOfLongestSubstring(input)).toBe(expected);
        });
    });
})