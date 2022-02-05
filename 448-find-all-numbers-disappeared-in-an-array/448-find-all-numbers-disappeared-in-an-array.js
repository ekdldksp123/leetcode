/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
    let arr = Array(nums.length).fill().map((v,i) => i + 1);
    return arr.filter((v) => !nums.includes(v));
};