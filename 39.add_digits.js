// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
//     Input: num = 38
//     Output: 2
//     Explanation: The process is
//     38 --> 3 + 8 --> 11
//     11 --> 1 + 1 --> 2
//     Since 2 has only one digit, return it.

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str = "" + num;

    while (str.length > 1) {
        str = "" + str.split('').reduce((item, acc) => parseInt(item) + parseInt(acc));
    }

    return str;
};