/**
 Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix: number[][]): void => {
    const matTemp = []
    for (let i = 0; i < matrix.length; i++){
        matTemp.push([])
        for (let j = 0; j < matrix.length; j++){
            matTemp[i].push(matrix[i][j])
        }
    }
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix.length; j++){
            matrix[j][matrix.length-1-i] = matTemp[i][j]
        }
    }
};