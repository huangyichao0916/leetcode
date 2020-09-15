function maxLength(arr: string[]): number {
    function isLegal(str:string):boolean {
        // const arrStr:string[] = str.split('')
        // const len1:number = arrStr.length;
        // const len2:number = [...new Set(arrStr)].length;
        // return len1 === len2;
        const strArr:string[] = str.split('')
        for (let i = 0; i < strArr.length; i++) {
            const element = strArr[i];
            const reg:RegExp = new RegExp(`[${element}]`);
            const testStr = str.slice(i + 1)
            if (reg.test(testStr)) {
                return false;
            }
        }
        return true
    }

    for (let i = 0; i < arr.length; i++) {
        if (!isLegal(arr[i])) {
            arr.splice(i,1)
            i --;
        }
    }

    if (!arr.length) {
        return 0;
    }

    const resArr:string[] = []

    function dfs(start:number,path:string[]) {
        let pathJoin:string = path.join('')
        // console.log(pathJoin)
        if (path.length <= arr.length) {
            if (path.length < arr.length) {
                resArr.push(pathJoin);
            }else{
                resArr.push(pathJoin);
                return;
            }
        }
        const reg:RegExp = new RegExp(`[${pathJoin}]`) 
        for (let i = start; i < arr.length; i++) {
            const element:string = arr[i];
            if (reg.test(element)) {
                continue;
            }
            path.push(element)
            dfs(i + 1,path)
            path.pop()
        }
    }

    dfs(0,[])

    let resMaxLength:number = 0;
    resArr.forEach(item => {
        if (item.length > resMaxLength) {
            resMaxLength = item.length;
        }
    })

    return resMaxLength;
};

const arr =  ["yy","bkhwmpbiisbldzknpm","a"]


console.log(maxLength(arr))