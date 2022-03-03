/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
    let pivot = -1;
    for(let i=0; i<nums.length; i++) {
        
        const left = nums.slice(0, i).reduce((acc, cur) => acc+cur,0) || 0;
        const right = nums.slice(i + 1).reduce((acc, cur) => acc+cur,0) || 0;
        
        if(left === right) {
            pivot = i; 
            break;
        }
    }
    return pivot;
};


/*
* 1. 배열의 length % 2 !== 0 이면 -1을 리턴
* 2. forEach 문을 돌면서 현재 index 가 (arr.length/2) - 1 일때 앞뒤로 slice 해서 sum 비교
* 3. 값이 같으면 index 리턴
*
*/