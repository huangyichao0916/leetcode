function combine(n: number, k: number): number[][] {
    const resArr:number[][] = [];

    function dfs(start:number,path:number[]) {
        if (k - path.length > n - start + 1) {
            return;
        }
        if (path.length === k) {
            resArr.push(path.slice())
            return;
        }


        for (let i = start; i <= n; i++) {
            path.push(i)
            dfs(i + 1,path);
            path.pop()
        }
    }
    dfs(1,[])
    return resArr;
};


console.log(combine(4,2))