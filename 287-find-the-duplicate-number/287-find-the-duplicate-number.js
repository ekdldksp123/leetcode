/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
    const map = new Map();
    
    for(const e of nums) {
        if(!map.has(e)) map.set(e, 1);
        else return e;
    }
};

/*
* 1. map 에 요소가 없으면 key로 담는다 value는 1
* 2. map 에 요소가 있으면 중복된 것으로 간주하고 return
*/