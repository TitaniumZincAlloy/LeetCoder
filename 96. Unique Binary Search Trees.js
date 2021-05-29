// Runtime: 76 ms, faster than 72.20% of JavaScript online submissions for Unique Binary Search Trees.
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let g = [1, 1];

    for(let i=2; i<=n; i++) {
        g.push(0);
        for(let j=1; j<=i; j++) {
            g[i] += g[j-1] * g[i-j];
        }
    }

    return g[n];
};

console.log(numTrees(3))