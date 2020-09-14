function letterCombinations(digits: string): string[] {
    if (!digits.length) {
        return []
    }
    interface MyObj{
        [anyProps:string]:string[]
    }
    const obj:MyObj = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z'],
    }
    const resStrs:string[] = [];

    const myLetters:string[] = digits.split('');
    const len:number = myLetters.length;

    function dfs(letters:string[],path:string[]) {
        if (path.length === len) {
            resStrs.push(path.slice().join(''))
            return
        }
        
        const copyLetters:string[] = [...letters];
        const letter:string|undefined = copyLetters.shift();
        // console.log(obj[letter])
        for (const item of obj[letter as string]) {
            path.push(item)
            dfs(copyLetters,path)
            path.pop()
        }
    }
    dfs(myLetters,[])
    return resStrs;
};

console.log(letterCombinations("23"))