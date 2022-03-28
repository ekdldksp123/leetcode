/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const map = new Map();
    let result = false;
    for(const e of nums) {
        if(!map.has(e)) map.set(e)
        else {
            result = true
            break
        }
    }
    return result
};