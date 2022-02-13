/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    if(nums.length === 1) return nums[0];
    
    let max = -Infinity;
    let sum = -Infinity;
    for(let i = 0; i < nums.length; i ++) {
        sum = Math.max(0, sum) + nums[i];
        max = Math.max(sum, max);
    }
    return max;
};
