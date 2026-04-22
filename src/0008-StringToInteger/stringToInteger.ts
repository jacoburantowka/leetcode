/**
 * Implement the myAtoi(string s) function,
 * which converts a string to a 32-bit signed integer.
 *
 * The algorithm for myAtoi(string s) is as follows:
 *
 *     Whitespace: Ignore any leading whitespace (" ").
 *     Signedness: Determine the sign by checking if the next character is '-' or '+',
 *                 assuming positivity if neither present.
 *     Conversion: Read the integer by skipping leading zeros until a non-digit character
 *                 is encountered or the end of the string is reached. If no digits were read, then the result is 0.
 *     Rounding:   If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer
 *                 to remain in the range. Specifically, integers less than -231 should be rounded to -231,
 *                 and integers greater than 231 - 1 should be rounded to 231 - 1.
 *
 * Return the integer as the final result.
 */


export const myAtoi = (str: string): number => {

    const s = str.trim(), min = -2147483648, max = 2147483647;
    let i = 0, neg = false, res: string | number = '';

    if (s[i] === '+' || s[i] === '-') {
        neg = s[i] === '-';
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        res += s[i];
        i++;
    }

    res = +res * (neg ? -1 : 1);

    return res > max ? max : res < min ? min : res;
}