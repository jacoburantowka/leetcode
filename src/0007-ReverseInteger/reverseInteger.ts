/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

export const reverseInteger = (n: number): number => {
    const INT_LIMIT = 2 ** 31 - 1;

    let remaining = Math.abs(n); // Ignore negative numbers - we re-add this on return
    let reversed = 0;

    while (remaining > 0) {
        const digit = remaining % 10;
        remaining = Math.floor(remaining / 10);
        reversed = reversed * 10 + digit;
        if (reversed > INT_LIMIT) return 0;
    }

    return n > 0 ? reversed : -reversed;
}