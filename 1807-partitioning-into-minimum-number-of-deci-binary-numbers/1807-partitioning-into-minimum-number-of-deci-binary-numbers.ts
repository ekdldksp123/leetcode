/*
 1. deci-binary = 10, 11, 100, 101, 111, ... 
 2. 각 자리수마다 1씩 뺄수 있으므로 가장 큰 자릿수를 구하면 됨!
 3. 숫자로 형변환하는 건 왜 parseInt가 제일 빠른거지?
 */

const minPartitions = (n: string): number => {
    let result = 0
    for(let i=0; i<n.length; i++) {
        result = Math.max(result, parseInt(n[i]))
    }
    return result
};