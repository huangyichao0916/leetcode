function getPermutation(n: number, k: number): string {
    if (n === 1) {
      return '1';  
    }
    const arr:number[] = new Array(n);//存放1-n的阶乘
    const numArr:number[] = new Array(n)//存放1-n
    /**
     * [ 1, 2, 6, 24, 120 ]
     * [ 1, 2, 3, 4, 5 ]
     */
    arr[0] = 1;
    numArr[0] = 1
    let pre:number = 1;
    for (let i = 1; i < arr.length; i++) {
        numArr[i] = i + 1
        arr[i] = pre * (i + 1);
        pre = arr[i]
    }

    arr.pop();

    let res:string = '';

    while (k) {
        // if (k === 0) {
        //     res += numArr.reverse().join('')
        // }
        const digit:number = arr.pop() as number
        const divisor:number = Math.ceil(k / digit)
        res += numArr[divisor - 1];
        numArr.splice(divisor - 1,1)
        k = k % digit;
    }

    res += numArr.reverse().join('')

    // for (let i = 0; i < k - 1; i++) {
        
    // }

    return res;
};

console.log(getPermutation(3,3))