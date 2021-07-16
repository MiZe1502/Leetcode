// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
//
// Given an integer n, return true if n is an ugly number.

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n < 1) {
        return false;
    }

    const dividers = [2, 3, 5];
    let i = 0;
    while (n > 1)  {
        if (n % dividers[i] !== 0) {
            if (i === dividers.length - 1) {
                return false;
            } else {
                i++;
            }
        } else {
            n = n / dividers[i];
        }
    }

    return true;
};