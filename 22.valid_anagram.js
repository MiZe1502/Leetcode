/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let letters = {};

    for (let i = 0; i < s.length; i++) {
        if (letters[s[i]] === undefined) {
            letters[s[i]] = 1;
        } else {
            letters[s[i]] += 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!letters[t[i]]) {
            return false;
        } else {
            letters[t[i]] -= 1;
        }
    }

    for (let letter in letters) {
        if (letters[letter] !== 0) {
            return false;
        }
    }

    return true;
};