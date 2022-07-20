/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    const map = new Map()
    for(const n of nums1) {
        map.set(n, (map.get(n) || 0) + 1)
    }
    const result = [];
    for(const n of nums2) {
        if(map.get(n)) {
            map.set(n, map.get(n)-1)
            result.push(n)
        }
    }
    return result
};