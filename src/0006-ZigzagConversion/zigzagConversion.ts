/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR".
 * We can forget about all the zigzag stuff and think of the problem as rows of strings instead.
 * We simply need to loop through each character and add it to the appropriate string: "PAHN", "APLSIIG", "YIS".
 */

export const convert = (
    s: string,
    numRows: number
): string => {

    if (numRows === 1 || s.length < numRows) {
        return s;
    }

    // Array the size of numRows.
    const arr = Array(numRows).fill('');

    // These two control whether we are increasing or decreasing (up or down the zigzag).
    let cursor = 0;
    let isDecreasing = false;

    for (let i = 0; i < s.length; i++) {
        arr[cursor] += s[i]; // Concat the char to the current cursor position.

        if (isDecreasing) {
            if (cursor != 0) { // Cursor shouldn't be negative
                cursor -= 1;
            }
        } else {
            cursor += 1;
        }

        if (cursor === 0 || cursor === numRows - 1) {
            isDecreasing = !isDecreasing;
        }
    }

    return arr.join('');
}