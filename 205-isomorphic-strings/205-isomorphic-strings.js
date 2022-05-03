/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isIsomorphic = (s, t) => {
    const map = new Map()
    
    const sArr = [...s]
    const tArr = [...t]
    
    for(let i = 0; i < s.length; i++) {
    
        if(!Array.from(map.keys()).includes(s[i])) map.set(s[i], i)
        sArr[i] = map.get(s[i])
    }
    
    map.clear()
    
    for(let i = 0; i < t.length; i++) {
    
        if(!Array.from(map.keys()).includes(t[i])) map.set(t[i], i)
        tArr[i] = map.get(t[i])
    }
    
    return JSON.stringify(sArr) === JSON.stringify(tArr)
};

