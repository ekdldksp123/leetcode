/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
    const has = [...s]
    
    for(const e of t) {
        if(has.includes(e)) has.splice(has.indexOf(e), 1)
        else return e
    }
};