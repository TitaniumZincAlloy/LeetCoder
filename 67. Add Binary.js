// Runtime: 80 ms, faster than 91.26% of JavaScript online submissions for Add Binary.
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aBinNum = new BinaryNum(a);
    let bBinNum = new BinaryNum(b);

    const newBinNum = aBinNum.add(bBinNum);
    return newBinNum.numStr;
};

class BinaryNum {
    constructor(str) {
        this.numStr = str;
    }

    length() {
        return this.numStr.length;
    }

    add(binNum) {
        let largestSize = this.length()>binNum.length() ? this.length() : binNum.length();
        let carryOver = 0;
        
        let resultStr = "";

        for(let i=0; i<largestSize; i++) {
            const char1 = this.numStr[this.length()-1-i] ?? "0";
            const char2 = binNum.numStr[binNum.length()-1-i] ?? "0";

            const total = parseInt(char1) + parseInt(char2) + carryOver;
            carryOver = 0;

            switch(total) {
                case 3:
                    carryOver = 1;
                    resultStr = "1" + resultStr;
                    break;
                case 2:
                    carryOver = 1;
                    resultStr = "0" + resultStr;
                    break;
                case 1:
                    resultStr = "1" + resultStr;
                    break;
                case 0: 
                    resultStr = "0" + resultStr;
                    break;
                default:
                    console.log('Not supposed to be here');
            }

        }

        if(carryOver > 0) {
            resultStr = "1" + resultStr;
        }

        return new BinaryNum(resultStr);
    }
}

console.log(addBinary("1", "100000"));
console.log(addBinary("1111111", "100000"));