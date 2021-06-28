// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function(nums) {
//     if (nums.length === 1) {
//         return nums[0];
//     }

//     const sorted = nums.sort();

//     let curElem = sorted[0];
//     let counter = 1;
//     for (let i = 1; i < sorted.length; i++) {
//         if (curElem === sorted[i]) {
//             counter++;
//         } else if (counter !== 1) {
//             counter = 1;
//             curElem = sorted[i];
//         } else if (counter === 1) {
//             return curElem;
//         }
//     }

//     if (counter === 1) {
//         return curElem;
//     }
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function(nums) {
//     if (nums.length === 1) {
//         return nums[0];
//     }

//     const unique = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (unique[nums[i]] !== undefined) {
//             unique[nums[i]]++;
//         } else {
//             unique[nums[i]] = 1;
//         }
//     }

//     for (key in unique) {
//         if (unique[key] === 1) {
//             return key;
//         }
//     }
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
};