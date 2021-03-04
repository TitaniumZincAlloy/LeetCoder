// Runtime: 76 ms, faster than 87.60% of JavaScript online submissions for Valid Parentheses.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for (let i=0; i<s.length; i++) {
        const char = s.charAt(i);

        if(char == '(' || char == '{' || char == '[') {
            stack.push(char);
        } else {
            if(stack.length == 0) { return false; }

            const popped = stack.pop();
            if(char == ')' && popped != '(') {
                return false;
            } else if(char == '}' && popped != '{') {
                return false;
            } else if(char == ']' && popped != '[') {
                return false;
            }
        }
    }
    
    return (stack.length == 0);
};

console.log(isValid("(())"));