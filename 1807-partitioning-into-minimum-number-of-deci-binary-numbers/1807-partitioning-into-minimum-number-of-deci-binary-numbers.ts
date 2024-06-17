/*
 1. deci-binary = 10, 11, 100, 101, 111, ... 
 2. 각 자리수마다 1씩 뺄수 있으므로 가장 큰 자릿수를 구하면 됨!
 */

const minPartitions = (n: string): number => {
    let result = 0
    for(const digit of n) {
        result = Math.max(result, Number(digit))
    }
    return result
};