/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    return nums.includes(target) ? nums.indexOf(target) : [target, ...nums].sort((x,y)=> x-y).indexOf(target);
};