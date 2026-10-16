const { describe, it } = require("node:test")
const assert = require("node:assert/strict")
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const closers = {
        '}': '{',
        ']': '[', 
        ')': "("
    }

    for (const char of s) {
        if (!closers[char]) { // If it's an opener
            stack.push(char)
        } else { // If it's a closer
            let popped = stack.pop() // Pop stack
            if (closers[char] !== popped) {
                return false
            }
        }
    }

    return stack.length === 0
};

describe("(())", () => {
    it('should return true', () => {
        assert.equal(isValid("(())"), true)
    });
});

describe("())", () => {
    it('should return false', () => {
        assert.equal(isValid("())"), false)
    });
});

describe("({}[])", () => {
    it('should return true', () => {
        assert.equal(isValid("({}[])"), true)
    });
});

describe("((()", () => {
    it('should return false', () => {
        assert.equal(isValid("((()"), false)
    });
});

// console.log(isValid("(())"));