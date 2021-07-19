/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = [];

    for (let i = 0; i <= n; i++) {
        let str = i.toString(2);
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '1') {
                count++;
            }
        }
        res.push(count)
    }

    return res;
};