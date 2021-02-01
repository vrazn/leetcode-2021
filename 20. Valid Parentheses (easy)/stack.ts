/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  if (s.length <= 1) return false;
  
  const map = {
    '(':')',
    '{':'}',
    '[':']',
  };
  
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(map[s[i]]);
    } else if (s[i] !== stack.pop())  {
      return false;
    }
  }
  
  return stack.length === 0;
};
// @lc code=end

