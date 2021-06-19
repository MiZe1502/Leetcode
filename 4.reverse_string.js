// Write a function that reverses a string. The input string is given as an array of characters s.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = 0; i < s.length / 2; i++) {
        const temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
    return s;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString_2 = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const temp = s[right];
        s[right] = s[left];
        s[left] = temp;

        left++;
        right--;
    }

    return s;
};