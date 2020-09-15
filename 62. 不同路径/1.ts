// function uniquePaths(m: number, n: number): number {
//     let res:number = 0;

//     function dfs(myM:number,myN:number) {
//         if (myM > m - 1 || myN > n - 1) {
//             return;
//         }
//         if (myM + myN === m + n - 2) {
//             res ++;
//             return;
//         }

//         dfs(myM + 1,myN)
//         dfs(myM,myN + 1)
//     }
//     dfs(0,0)
//     return res;
// };

function uniquePaths(m: number, n: number): number {
    function dfs(myM:number,myN:number):number {
        if (myM === m - 1) {
            return 1; 
        }
        if (myN === n - 1) {
            return 1;
        }

        return(dfs(myM + 1,myN) + dfs(myM,myN + 1))
    }
    return dfs(0,0)
};

console.log(uniquePaths(3,2))