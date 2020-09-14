function permutation(s: string): string[] {
    const myS:string[] = s.split('')
    const resArr:string[] = [];

    function dfs(ss:string[],path:string[]) {
        if (path.length === s.length) {
            resArr.push(path.slice().join(''))
            return;
        }
        const obj:any = {};
        for (let i = 0; i < ss.length; i++) {
            const element = ss[i];
            if (obj[element]) {
                continue;
            }
            obj[element] = true
            const copySs:string[] = [...ss];
            copySs.splice(i,1)
            path.push(element)
            dfs(copySs,path)
            path.pop()
        }
    }

    dfs(myS,[])

    return resArr;
};

console.log(permutation("abcc"))