function threeSum(nums: number[]): number[][] {
    nums.sort((a,b) => a-b)

    const answer:number[][] = []
    for(let i=0; i<nums.length; i++) {
         // 첫 번째 숫자의 중복 제거
        if (i > 0 && nums[i] === nums[i - 1]) continue

        // 정렬되어 있으므로 양수부터는 합이 0이 될 수 없음
        if (nums[i] > 0) break

        let left = i+1
        let right = nums.length-1

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if(sum === 0) {
                answer.push([nums[i], nums[left], nums[right]])
                left++
                right--

                while(left < right && nums[left] === nums[left-1]) {
                    left++
                }
                while(left < right && nums[right] === nums[right+1]) {
                    right--
                }
            } else if(sum > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return answer
};