function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merge = [...nums1, ...nums2];
    merge.sort((a,b) => a - b);
    
    const length = merge.length;
    const isOdd = length % 2;

    const middleIdx = isOdd ? Math.floor(length/2) : length/2
    return isOdd > 0 ? merge[middleIdx] : (merge[middleIdx] + merge[middleIdx - 1])/2
};