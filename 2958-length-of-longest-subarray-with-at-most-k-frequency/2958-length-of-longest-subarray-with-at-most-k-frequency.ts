function maxSubarrayLength(nums: number[], k: number): number {
    const frequencyMap = new Map<number, number>()

    let l=0
    let maxLength=0

    for(let r=0; r<nums.length; r++) {
        const num = nums[r]
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)

        while(frequencyMap.get(num) > k) {
            const leftNum = nums[l]
            frequencyMap.set(leftNum, frequencyMap.get(leftNum) - 1)
            l++
        }
        maxLength = Math.max(r-l+1, maxLength)
    }

    return maxLength
};


/** 
right를 늘려 새로운 원소를 추가한다.
조건을 위반하면 left를 늘려 원소를 제거한다.
매번 유효한 구간의 최대 길이를 기록한다.
*/ 

