/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const bin = n.toString(2);

    let count = 0;
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '1') {
            count++;
        }
    }

    return count;

    // const count = bin.split('').reduce(function(a, b) {
    //     return +a + +b;
    // });
    // return count;
};