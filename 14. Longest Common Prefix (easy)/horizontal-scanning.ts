/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return '';
  
  let maxSequence = strs[0];
  
  while (maxSequence) {
    if (strs.every(str => str.startsWith(maxSequence))) { 
      break; 
    } else {
      maxSequence = maxSequence.slice(0, maxSequence.length - 1);
    };
  }
  
  return maxSequence;
};
// @lc code=end

