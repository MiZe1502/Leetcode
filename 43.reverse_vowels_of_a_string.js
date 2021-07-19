// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

/**
 * @param {string} s
 * @return {string}
 */

let vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

var reverseVowels = function(s) {
    let vowels = [];

    for (let i = s.length - 1; i >=0; i--) {
        if (vowelsSet.has(s[i])) {
            vowels.push(s[i]);
        }
    }

    let j = 0;
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (vowelsSet.has(s[i])) {
            res += vowels[j];
            j++;
        } else {
            res += s[i];
        }
    }

    return res;
};