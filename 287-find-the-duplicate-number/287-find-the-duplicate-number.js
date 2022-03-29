/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
    const set = [] 
    
    for(let i=0; i<nums.length; i++) { // index 를 이용한 for 문이 제일 빠름
        if(!set.includes(nums[i])) set.push(nums[i])
        else return nums[i]
    }
};
