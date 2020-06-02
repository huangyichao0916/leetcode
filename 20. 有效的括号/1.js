/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s === '') {
        return true;
    }
    let [stack, point] = [[], -1];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
            point ++;
        }else{
            if (point === -1) {
                return false;
            }else{
                if (s[i] === ')') {
                    if (stack[point] === '(') {
                        stack.pop();
                        point--;
                    }else{
                        break;
                    }
                }else if(s[i] === ']'){
                    if (stack[point] === '[') {
                        stack.pop();
                        point--;
                    }else{
                        break;
                    }
                }else{
                    if (stack[point] === '{') {
                        stack.pop();
                        point--;
                    }else{
                        break;
                    }
                }
            }
        }
    }
    return stack.length === 0 ? true : false;
};

let testStr = "()[]{}"
console.log(isValid(testStr));