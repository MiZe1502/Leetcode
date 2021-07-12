// Reverse bits of a given 32 bits unsigned integer.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let str = n.toString(2);
    while (str.length < 32) {
        str = '0' + str;
    }
    str = str.split('').reverse().join('');
    return parseInt(str, 2);
};