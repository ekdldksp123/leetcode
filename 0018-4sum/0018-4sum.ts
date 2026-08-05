function fourSum(nums: number[], target: number): number[][] {
    const answer: number[][] = [];

    // 작은 숫자부터 정렬
    nums.sort((a, b) => a - b);

    const n = nums.length;

    // 첫 번째 숫자 선택
    for (let i = 0; i < n - 3; i++) {
        // 같은 첫 번째 숫자를 다시 선택하지 않음
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // 두 번째 숫자 선택
        for (let j = i + 1; j < n - 2; j++) {
            // 같은 두 번째 숫자를 다시 선택하지 않음
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            // 나머지 두 숫자를 찾는 포인터
            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum =
                    nums[i] +
                    nums[j] +
                    nums[left] +
                    nums[right];

                if (sum < target) {
                    // 합이 작으면 더 큰 숫자가 필요함
                    left++;
                } else if (sum > target) {
                    // 합이 크면 더 작은 숫자가 필요함
                    right--;
                } else {
                    // 합이 target과 같으면 정답
                    answer.push([
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right],
                    ]);

                    left++;
                    right--;

                    // left의 같은 숫자 건너뛰기
                    while (
                        left < right &&
                        nums[left] === nums[left - 1]
                    ) {
                        left++;
                    }

                    // right의 같은 숫자 건너뛰기
                    while (
                        left < right &&
                        nums[right] === nums[right + 1]
                    ) {
                        right--;
                    }
                }
            }
        }
    }

    return answer;
}