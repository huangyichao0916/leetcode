function toLowerCase(str: string): string {
    return str.replace(/[A-Z]/g,(s1: string):string => {
        let t:number = s1.charCodeAt(0);
        t = t + 32;
        return String.fromCharCode(t);
    })
};

console.log(toLowerCase('aAsdNASasd'))