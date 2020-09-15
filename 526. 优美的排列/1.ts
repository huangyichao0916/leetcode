function countArrangement(N: number): number {
    let res:number = 0;
    let point = 1;
    const myNums:number[] = new Array(N);
    for (let i = 0; i < N; i++) {
        myNums[i] = i + 1;
    }

    function dfs(nums:number[],path:number[]) {
        if (path.length === N) {
            res ++;
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            const isLegal:boolean = element % point === 0 || point % element === 0;

            if (isLegal) {
                path.push(element)
                point ++;
                const copyNums:number[] = [...nums];
                copyNums.splice(i,1);
                dfs(copyNums,path)
                path.pop()
                point --;
            }
        }
    }

    dfs(myNums,[])

    return res;
};

console.log(countArrangement(4))