function letterCasePermutation(S: string): string[] {
    const resArr:string[] = [];
    const [reg1,reg2] = [/[a-z]/,/[A-Z]/];

    let myS:string[] = S.split('')

    function dfs(path:string,start:number) {
        
        for (let i = start; i < myS.length; i++) {
            const element = myS[i]
            if (reg1.test(element) || reg2.test(element)) {
                if (reg1.test(element)) {
                    for (const item of [element,element.toUpperCase()]) {
                        let newPath:string = path + item;
                        dfs(newPath,i+1)
                    }
                }else{
                    for (const item of [element,element.toLowerCase()]) {
                        let newPath:string = path + item;
                        dfs(newPath,i+1)
                    }
                }
                return;
            }
            path += element
        }
        resArr.push(path)
    }
    dfs('',0)
    return resArr;
};

const S = "a1b2";
console.log(letterCasePermutation(S))