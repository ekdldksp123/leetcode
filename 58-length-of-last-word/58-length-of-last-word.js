/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    const arr = s.split(' ').filter(e => e!== '');
    return arr.pop().length;
}

/*
* 1. 공백을 중심으로 split 한다
* 2. '' 이 아닌 마지막 요소를 찾는다
* 3. 마지막 글자의 길이를 구한다
*/