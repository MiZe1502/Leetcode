// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 1) {
        return true;
    }

    if (n < 3) {
        return false;
    }

    while (n !== 3 || n > 3) {
        const rest = n % 3
        if (rest !== 0) {
            return false;
        }
        n = n / 3;
    }

    return true;
};