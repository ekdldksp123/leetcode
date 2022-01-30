/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = (nums) => {
    return nums.sort()[Math.floor(nums.length/2)];
};

