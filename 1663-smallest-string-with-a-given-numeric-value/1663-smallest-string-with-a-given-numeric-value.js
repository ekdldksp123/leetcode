/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getSmallestString = function(n, k) {
    const alphabet = Array.from({ length: 26 }, (v,i) => String.fromCharCode(i + 97))
    let result = '';
    
    for(let i = n; i > 0; i--) {
        const num = k - n;
        if(num >= 26) {
            result += alphabet[25];
            k -= 25
        } else {
            result += alphabet[num];
            k -= num
        }
    }
    
    return result.split('').reverse().join('')
}


/*
* 1. Array.from({ length: 26 }, (v,i) => String.fromCharCodeAt(i + 97))
* 2. n 만큼 반복하면서(*) k-n >= 26 일 경우 z => z의 개수부터(**) 구해야 함
* 3. k-n < 26 일 경우 a <= ? < z 의 ?를 구해야 함
* 4. return 시에 str 반대로 뒤집어주기
*/