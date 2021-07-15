// You are given a sorted unique integer array nums.
//
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
//
// Each range [a,b] in the list should be output as:
//
// "a->b" if a != b
// "a" if a == b


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) {
        return nums;
    }

    let res = [];

    let lastElem = nums[0];
    let counter = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        } else if (nums[i] - nums[i - 1] === 1) {
            counter++;
            continue;
        } else {
            if (counter > 1) {
                res.push(`${lastElem}->${nums[i-1]}`)
                counter = 1;
            } else {
                res.push("" + lastElem);
            }
            lastElem = nums[i];
        }
    }

    if (counter === 1) {
        res.push(""+ lastElem);
    } else {
        res.push(`${lastElem}->${nums[nums.length - 1]}`)
    }

    return res;
};