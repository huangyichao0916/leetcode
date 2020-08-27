function repeatedSubstringPattern(s: string): boolean {
    const ss:string = (s + s).slice(1,-1);
    return ss.indexOf(s) !== -1
};
const str:string = 'ababab'
console.log(repeatedSubstringPattern(str))