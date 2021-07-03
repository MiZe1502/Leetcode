// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let sorted = nums.sort();

    let curElem = sorted[0];
    let count = 1;
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === curElem) {
            count++;
            if (count > sorted.length / 2) {
                return curElem;
            }
        } else {
            curElem = sorted[i];
            count = 1;
        }
    }
    return curElem;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement_1 = function(nums) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    let maj = nums.length / 2;
    for (let [key, value] of map) {
        if (value > maj) {
            return key;
        }
    }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement_3 = function(nums) {
    return nums.sort()[Math.floor(nums.length / 2)];
};