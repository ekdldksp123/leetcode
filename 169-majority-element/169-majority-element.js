/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = (nums) => {
    nums.sort();
    return nums[Math.floor(nums.length/2)];
};

