// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hash1 = {};
    let hash2 = {};

    for (let i = 0; i < nums1.length; i++) {
        if (hash1[nums1[i]]) {
            hash1[nums1[i]] += 1;
        } else {
            hash1[nums1[i]] = 1;
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (hash2[nums2[i]]) {
            hash2[nums2[i]] += 1;
        } else {
            hash2[nums2[i]] = 1;
        }
    }

    let res = [];
    for (let elem in hash1) {
        if (hash2[elem]) {
            let min = Math.min(hash1[elem], hash2[elem]);
            res.push(...(new Array(min).fill(elem)))
        }
    }

    return res
};