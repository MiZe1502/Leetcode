// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let splitted = s.split(' ');

    if (pattern.length !== splitted.length) {
        return false;
    }

    let hash = {};
    let processed = new Set();

    for (let i = 0; i < pattern.length; i++) {
        if (hash[pattern[i]] !== undefined) {
            if (hash[pattern[i]] !== splitted[i]) {
                return false;
            }
        } else {
            if (processed.has(splitted[i])) {
                return false;
            }
            hash[pattern[i]] = splitted[i];
            processed.add(splitted[i]);
        }
    }

    return true;
};