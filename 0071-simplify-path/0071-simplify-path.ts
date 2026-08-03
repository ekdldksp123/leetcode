function simplifyPath(path: string): string {
    const pathArr = path.split('/')
    const dirArr = []

    for(const el of pathArr) {
        if(el === '..') {
            dirArr.pop()
        } else if(el !== '.' && el !== '') {
            dirArr.push(el)
        }
    }

    return `/${dirArr.join('/')}`
};