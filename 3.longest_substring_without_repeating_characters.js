/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring_1 = function(s) {
    if (s.length === 1 || s.length === 0) {
        return s.length;
    }

    let symbols = new Set();
    let sizes = [];
    let startSeqIndex = 0;
    let curSize = 0;

    for (let i = 0; i < s.length; i++) {
        if (symbols.has(s[i])) {
            sizes.push(curSize);
            curSize = 0;
            symbols.clear();
            i = startSeqIndex;
            startSeqIndex = startSeqIndex + 1;
        } else {
            symbols.add(s[i]);
            curSize = curSize + 1;
        }
    }

    if (curSize !== 0) {
        sizes.push(curSize);
    }

    sizes.sort(function(a, b) {
        return b - a;
    });

    return sizes[0]
};






// /**
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLongestSubstring_2 = function(s) {
//     if (s.length === 0 || s.length === 1) {
//         return s.length;
//     }
//
//     let hash = {};
//     let res = "";
//     let prevIndex = 0;
//
//     for (let i = 0; i < s.length; i++) {
//         if (hash[s[i]] === undefined) {
//             hash[s[i]] = i;
//         } else {
//             if (Object.keys(hash).length > res.length) {
//                 res = s.slice(prevIndex, hash[s[i]])
//                 // res = Object.keys(hash).join("");
//             }
//             delete hash[s[i]]
//             // hash = {};
//             hash[s[i]] = i;
//             prevIndex = i;
//         }
//
//         console.log(hash, res, i)
//     }
//
//     if (Object.keys(hash).length > res.length) {
//         res = Object.keys(hash).join("");
//     }
//
//     console.log(s, res, res.length);
//     return res.length;
// };

// lengthOfLongestSubstring_2('abcabcbb')
// lengthOfLongestSubstring_2('bbbbb')
// lengthOfLongestSubstring_2('pwwkew')
// lengthOfLongestSubstring_2('')
// lengthOfLongestSubstring_2('au')
// lengthOfLongestSubstring_2("dvdf")


/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring_3 = function(s) {
    if (s.length < 2) {
        return s.length;
    }

    let i = 0;
    let ans = 0;
    let hash = {};

    for (let j = 0; j < s.length; j++) {
        if (hash[s[j]]) {
            i = Math.max(hash[s[j]], i);
        }

        ans = Math.max(ans, j - i + 1);
        hash[s[j]] = j + 1;
    }

    console.log(s, ans)
    return ans;
}


lengthOfLongestSubstring_3('abcabcbb')
lengthOfLongestSubstring_3('bbbbb')
lengthOfLongestSubstring_3('pwwkew')
lengthOfLongestSubstring_3('')
lengthOfLongestSubstring_3('au')
lengthOfLongestSubstring_3("dvdf")

