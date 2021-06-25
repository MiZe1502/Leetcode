// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
//
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
//
// You may assume the integer does not contain any leading zero, except the number 0 itself.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 0;
    let res = []; //can do the same with string

    for (let i = digits.length - 1; i >= 0; i--) {
        const val = i === digits.length - 1 ? digits[i] + 1 : digits[i] + carry;
        if (val > 9) {
            carry = 1;
            res.push(0);
        } else {
            carry = 0;
            res.push(val);
        }
    }

    if (carry > 0) {
        res.push(carry);
    }

    return res.reverse();
};