/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let i = s.length;
  let length = 0;

  while (i > 0) {
    i--;
    if (s[i] !== ' ') {
      length++;
    } else if (length > 0) {
      return length;
    }
  }
  return length;
}
// @lc code=end
