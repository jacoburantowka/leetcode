/**
 * 5 - Longest Palindromic Substring
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * Key insight: Every palindrome has a "center" — either a single character
 * (odd-length: "racecar" centers on 'e') or a pair of identical characters
 * (even-length: "abba" centers between the two 'b's).
 *
 * For each possible center (2n - 1 centers total for a string of length n),
 * we expand outward as long as the characters on both sides match.
 * We track the longest palindrome found throughout.
 *
 * Time Complexity:  O(n²) — n centers, each potentially expanding O(n)
 * Space Complexity: O(1) — only indices are stored, no auxiliary structures
 */

function expandAroundCenter(s: string, left: number, right: number): [number, number] {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    // After the loop, s[left] and s[right] no longer match so the valid palindrome is (left + 1) -> (right - 1)]
    return [left + 1, right - 1];
}

export function longestPalindrome(s: string): string {
    if (s.length <= 1) return s;

    let bestStart = 0;
    let bestEnd = 0;

    for (let i = 0; i < s.length; i++) {
        // Case 1: Odd-length palindromes — single character center (e.g. "aba")
        const [oddStart, oddEnd] = expandAroundCenter(s, i, i);

        // Case 2: Even-length palindromes — two-character center (e.g. "abba")
        const [evenStart, evenEnd] = expandAroundCenter(s, i, i + 1);

        if (oddEnd - oddStart > bestEnd - bestStart) {
            bestStart = oddStart;
            bestEnd = oddEnd;
        }

        if (evenEnd - evenStart > bestEnd - bestStart) {
            bestStart = evenStart;
            bestEnd = evenEnd;
        }

        // Replace the two if blocks with this if we're interested in an array of all
        // longest palindromic substrings instead.
        // for (const [start, end] of [[oddStart, oddEnd], [evenStart, evenEnd]]) {
        //     if (end - start > bestEnd - bestStart) {
        //         // New longest found — reset the results array
        //         bestStart = start;
        //         bestEnd = end;
        //         results = [s.slice(start, end + 1)];
        //     } else if (end - start === bestEnd - bestStart) {
        //         // Tied for longest — add to results if not already present
        //         const candidate = s.slice(start, end + 1);
        //         if (!results.includes(candidate)) {
        //             results.push(candidate);
        //         }
        //     }
        // }
    }

    // Slice is exclusive on the right, so we use bestEnd + 1
    return s.slice(bestStart, bestEnd + 1);
}