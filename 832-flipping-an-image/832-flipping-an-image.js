/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = (image) => {
    return image.map(v => {
        v.reverse()
        v.forEach((e, i, arr) => {
            v[i] = e ? 0 : 1
        })
        return v
    })
};