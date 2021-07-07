// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sorted = nums.sort((a, b) => a - b);

    if (sorted[0] !== 0) {
        return 0;
    }

    for (let i = 0; i <= sorted.length; i++) {
        if (sorted[i + 1] !== sorted[i] + 1) {
            return i + 1;
        }
    }

};


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber_1 = function(nums) {
    // using Gauss formula
    const expectedSum = nums.length * (nums.length + 1) / 2;
    const sum = nums.reduce((elem, acc) => acc + elem);
    return expectedSum - sum;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber_2 = function(nums) {
    const numbers = new Set(nums);
    for (let i = 0; i <= numbers.size; i++) {
        if (!numbers.has(i)) {
            return i;
        }
    }
};