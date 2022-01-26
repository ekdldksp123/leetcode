/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
    let arr = []
    
    for(let i = 0; i < 34; i++) {
        const row = []
        for(let j = 0; j <= i; j++) {
            if(j === 0) row.push(1)
            else if( j === i ) row.push(1)
            else if( i > 0 && j > 0) {
                row.push(arr[i-1][j-1] + arr[i-1][j])
            }
        }
        if(i === rowIndex) {
            arr = row
            break;
        } else arr.push(row)

    }
    return arr
};
