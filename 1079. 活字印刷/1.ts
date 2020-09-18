function numTilePossibilities(tiles: string): number {
    let res:number = 0;
    const len = tiles.length;

    const myTiles:string[] = tiles.split('')
    function dfs(strs:string[],path:string[]) {
        if (path.length) {
            if (path.length < len) {
                res ++;
            }else{
                res ++;
                return;
            }
        }

        const obj:any = {};

        for (let i = 0; i < strs.length; i++) {
            if (obj[strs[i]]) {
                continue;
            }
            obj[strs[i]] = true;
            path.push(strs[i])
            const copyStrs:string[] = [...strs]
            copyStrs.splice(i,1)
            dfs(copyStrs,path)
            path.pop()
        }
    }
    dfs(myTiles,[])
    return res;
};

console.log(numTilePossibilities('AAB'))