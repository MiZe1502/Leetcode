/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum_1 = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};


console.log(twoSum_1([2,7,11,15], 9));
console.log(twoSum_1([3,2,4], 6));
console.log(twoSum_1([3,3], 6));



console.log("");
console.log("");
console.log("");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum_2 = function(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (hash[diff] !== undefined && hash[diff] !== i) { //check not current element
            return [i, hash[diff]]
        }
    }
};


console.log(twoSum_2([2,7,11,15], 9));
console.log(twoSum_2([3,2,4], 6));
console.log(twoSum_2([3,3], 6));


console.log("");
console.log("");
console.log("");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum_3 = function(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (hash[diff] !== undefined) {
            return [hash[diff], i]
        }
        hash[nums[i]] = i;
    }
};

console.log(twoSum_3([2,7,11,15], 9));
console.log(twoSum_3([3,2,4], 6));
console.log(twoSum_3([3,3], 6));

