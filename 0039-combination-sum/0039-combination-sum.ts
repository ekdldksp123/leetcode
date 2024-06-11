const combinationSum = (candidates: number[], target: number): number[][] => {
    const result = [];
    
    const dfs = (cur: number[], sum: number, idx: number) => {
        if (sum === target) {
            result.push(cur);
            return;
        }

        for (let i = idx; i < candidates.length; i++) {
            const newSum = sum + candidates[i];
            if (newSum <= target) {
                dfs([...cur, candidates[i]], newSum, i);
            }
        }
    };

    dfs([], 0, 0);

    return result;
};
