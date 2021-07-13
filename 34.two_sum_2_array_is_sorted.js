// Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
// Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let hash = {};

    for (let i = 0; i < numbers.length; i++) {
        const diff = target - numbers[i];
        if (hash[diff] !== undefined) {
            return [hash[diff], i + 1];
        } else {
            hash[numbers[i]] = i + 1
        }
    }
};