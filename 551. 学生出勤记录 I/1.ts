function checkRecord(s: string): boolean {
    const rega:RegExp = /a/gi
    const arr:any = s.match(rega)
    if (arr) {
        if (arr.length > 1) {
            return false
        }
    }
    const regb:RegExp = /l{3,}/ig
    return !regb.test(s)
};

const testStr = "PPALLL"
console.log(checkRecord(testStr))