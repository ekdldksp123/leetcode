/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    return nums.find(e => nums.indexOf(e, nums.indexOf(e) + 1) === -1);
};