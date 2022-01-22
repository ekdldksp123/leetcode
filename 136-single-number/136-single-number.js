/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.find(e => nums.indexOf(e, nums.indexOf(e) + 1) === -1);
};