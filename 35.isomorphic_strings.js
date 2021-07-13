// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let hash = {}

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === undefined) {
            hash[s[i]] = t[i];
        } else if (hash[s[i]] !== t[i]) {
            return false;
        }
    }

    hash = {}

    for (let i = 0; i < t.length; i++) {
        if (hash[t[i]] === undefined) {
            hash[t[i]] = s[i];
        } else if (hash[t[i]] !== s[i]) {
            return false;
        }
    }

    return true;
};