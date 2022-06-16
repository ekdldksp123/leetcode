/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = (image) => {
    return image.map(arr => {
        arr.reverse()
        arr.map((v, i) => {
            arr[i] = v ? 0 : 1
        })
        return arr
    })
};