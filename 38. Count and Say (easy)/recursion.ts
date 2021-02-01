/*
 * @lc app=leetcode id=38 lang=typescript
 *
 * [38] Count and Say
 */

// @lc code=start
function countAndSay(n: number): string {
    if (n === 1) return '1';
    
    let result = '1'; // base case
    for (let i = 2; i <= n; i++) {
        result = func(result);
    }
    return result;
};

function func(s: string): string {
    let result = '';
    let character = s[0];
    let count = 1;
    
    for (let j = 1; j < s.length; j++) {
        if (s[j] !== character) { // Found a new symbol
            result += `${count}${character}`;
            character = s[j];
            count = 1;
        } else {
            count++;
        }
    }
    result += `${count}${character}`;
    
    return result;
}
// @lc code=end

