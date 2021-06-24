// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }

    let j = 0;
    let index = 0;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[j] && j === 0) {
            index = i;
            j++;
            continue;
        }

        if (haystack[i] === needle[j]) {
            j++;
            continue;
        }

        if (j === needle.length) {
            return index;
        }

        if (haystack[i] !== needle[j] && j > 0) {
            j = 0;
            i = index;
            index = 0;
        }
    }

    return j === needle.length ? index : -1;

};