/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = (nums) => {
    return nums.sort((x,y) => {
        if(x % 2 === 0) return -1
        else if(y % 2 === 0) return 1
        else return 0
    })
};