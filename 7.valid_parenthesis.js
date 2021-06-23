// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//      - Open brackets must be closed by the same type of brackets.
//      - Open brackets must be closed in the correct order.


    /**
 * @param {string} s
 * @return {boolean}
 */

const chars = {
    ")": "(",
    "}": "{",
    "]": "[",
}

const openChars = new Set(['(', '{', '[']);

var isValid = function(s) {
    if (s === "") {
        return true;
    }

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (openChars.has(s[i])) {
            stack.push(s[i]);
        } else {
            if (stack.length === 0 || stack[stack.length - 1] !== chars[s[i]]) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;

};