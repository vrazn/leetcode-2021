/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
const VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanToInt(s: string): number {
    let sum: number = 0;
    let last: number = 0;
    
    for (let i: number = s.length - 1; i >= 0; i -= 1) {
        const current: number = VALUES[s[i]];
        sum += (current >= last) ? current : -current;
        last = current;
    }
    
    return sum;
};
// @lc code=end

