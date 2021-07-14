// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    hash = {}

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined) {
            hash[nums[i]] = [i];
        } else {
            for (let j = 0; j < hash[nums[i]].length; j++) {
                if (Math.abs(i - hash[nums[i]][j]) <= k) {
                    return true;
                }
            }
            hash[nums[i]].push(i);
        }
    }

    return false;
};