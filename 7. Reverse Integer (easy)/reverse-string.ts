/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const reversedStr = Math.abs(x).toString().split('').reverse().join('');
  const number = sign * Number(reversedStr);
  if (number < -(2**31) || number > (2**31 - 1)) return 0;  
  return number; 
}
// @lc code=end

