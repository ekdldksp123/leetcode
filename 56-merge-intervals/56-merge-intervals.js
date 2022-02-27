/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
    intervals.sort((x,y) => x[0] - y[0]);
    
    const result = [];
    for(const current of intervals) {
        if(result.length === 0 || result[result.length-1][1] < current[0]) {
            result.push(current);
        } else if(result[result.length-1][1] >= current[0]) {
            result[result.length-1][1] = Math.max(current[1], result[result.length-1][1]);
        }
    }
    return result;
};

/*
* 1. 먼저 intervals 를 sort (이때 [0] 만 비교한다)
* 2. result 가 empty 이면 push + current[0] > prev[1] 이면 push
* 3. prev[1] >= current[0] 이면 result[result.length - 1] = Math.max(current[1],result[result.length]);
*/