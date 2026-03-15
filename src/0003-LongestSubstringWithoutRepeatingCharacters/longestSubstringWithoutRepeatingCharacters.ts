/**
 * 3. Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest without duplicate characters.
 */

export const lengthOfLongestSubstring = (s: string): number => {
    const stringLength = s.length;
    if (stringLength === 0) return 0;

    let longestStringLength = 0;
    let startOfWindow = 0;
    let currentPosition = 0;

    let characterSet = new Set();

    while (currentPosition < stringLength) {
        if (characterSet.has(s[currentPosition])) {
            characterSet.delete(s[startOfWindow++]);
        } else {
            characterSet.add(s[currentPosition++]);
            longestStringLength = Math.max(
                longestStringLength,
                characterSet.size
            )
        }
    }

    return longestStringLength;
}