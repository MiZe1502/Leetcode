// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] !== undefined) {
            return true;
        }
        hash[nums[i]] = 1;
    }

    return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate_2 = function(nums) {
    const temp = nums.sort();

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === temp[i + 1]) {
            return true;
        }
    }


    return false;
};