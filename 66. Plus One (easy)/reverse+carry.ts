/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let i = digits.length - 1;
  let flag = true;

  while (i >= 0 && flag) {
    const newValue = digits[i] + 1;
    if (newValue >= 10) {
      digits[i] = newValue % 10;
      i--;
    } else {
      digits[i] = newValue;
      flag = false;
    }
  }

  if (i === -1 && flag) {
    digits.unshift(1);
  }

  return digits;
}
// @lc code=end
