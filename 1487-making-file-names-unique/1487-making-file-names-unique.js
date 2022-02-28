/**
 * @param {string[]} names
 * @return {string[]}
 */
const getFolderNames = (names) => {
    const result = [];
    const map = new Map();
    
    names.forEach((name) => {
        if(!map.has(name)) {
            map.set(name, 1);
            result.push(name);
        } else {
            let count = map.get(name);
            let newName =`${name}(${count})`;
            
            while(map.has(newName)) {
                newName = `${name}(${count++})`;
            }
            result.push(newName);
            map.set(newName, 1);
        }
    })
        
    return result;
};
    
/*
* 1. map 에 이름이 없으면 map 에 key를 이름으로 value를 1 로 저장
* 2. map 에 이름이 있으면 newName = `${name}(${map.get(name)})`
* 3. newName 이 map 에 있으면 없을때까지 newName = `${name}(${map.get(name)++})`
* 4. while 문을 빠져나오면 map.set(newName, map.get(newName)+1);
*
["kaido","kaido(1)","kaido","kaido(1)"]
["gta","gta(1)","gta","avalon"]
["wano","wano","wano","wano"]
["pes","fifa","gta","pes(2019)"]
*/