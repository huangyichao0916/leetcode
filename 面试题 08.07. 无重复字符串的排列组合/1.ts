function permutation(S: string): string[] {
    const resArr:string[] = [];
    const myS:string[] = S.split('')

    function dfs(paramS:string[],path:string[]) {
        if (path.length === S.length) {
            resArr.push(path.slice().join(''))
            return;
        }

        for (let i = 0; i < paramS.length; i++) {
            const element = paramS[i];
            const copyParamS:string[] = [...paramS]
            copyParamS.splice(i,1)
            path.push(element)
            dfs(copyParamS,path)
            path.pop()
        }
    }
    dfs(myS,[])
    return resArr;
};