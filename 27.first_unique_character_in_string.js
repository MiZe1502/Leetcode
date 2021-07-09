// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {};
    for (let i = s.length - 1; i >= 0; i--) {
        if (hash[s[i]] === undefined) {
            hash[s[i]] = 1;
        } else {
            hash[s[i]] += 1;
        }
    }

    //to prevent "aabb" situation
    let letters = new Set();
    for (let elem in hash) {
        if (hash[elem] === 1) {
            letters.add(elem)
        }
    }

    if (letters.size === 0) {
        return -1;
    }

    for (let i = 0; i < s.length; i++) {
        if (letters.has(s[i])) {
            return i;
        }
    }
};