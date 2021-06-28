// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length < 2) {
        return true;
    }

    let sanitized = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
    return sanitized === sanitized.split('').reverse().join('');
};