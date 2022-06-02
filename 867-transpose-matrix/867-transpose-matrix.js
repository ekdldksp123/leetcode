/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = (matrix) => {
    const result = Array.from({ length: matrix[0].length }, (v,i) => [])
    
    for(let i = 0; i < matrix[0].length; i++) {
        for(let j = 0; j < matrix.length; j++) {
            result[i].push(matrix[j][i])
        }
    }
    
    return result
};