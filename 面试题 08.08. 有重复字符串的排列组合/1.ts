function permutation(S: string): string[] {
    const resArr:string[] = [];
    const myS:string[] = S.split('')

    function dfs(paramS:string[],path:string[]) {
        if (path.length === S.length) {
            resArr.push(path.slice().join(''))
            return;
        }
        const obj:any = {};
        for (let i = 0; i < paramS.length; i++) {
            const element = paramS[i];
            if (obj[element]) {
                continue;
            }
            obj[element] = true;
            const copyParamS:string[] = [...paramS];
            copyParamS.splice(i,1)
            path.push(element)
            dfs(copyParamS,path)
            path.pop()
        }
    }
    dfs(myS,[])
    return resArr;
};