type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const results = []
        let resolve_count = 0

        for(let i = 0 ; i < functions.length; i++) {
            functions[i]().then(result => {
                resolve_count += 1
                results[i] = result
                if(resolve_count === functions.length) {
                    resolve(results)
                }
            }).catch(e => reject(e))
        };
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */