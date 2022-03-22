/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
};

/*
* 1. BigInt(n/hex/"str") =>  Number 값이 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체
* 2. 0b (or 0B) denotes(나타낸대) a binary literal(= 0과 1(2진수)로 표현되는 숫자)
* 3. toString(n) => 숫자를 n 진법으로 표현한 문자열로 변환
*/