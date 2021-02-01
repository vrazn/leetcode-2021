/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let i = 0;
  let j = nums.length;
  
  while (i < j) {
    if (nums[i] === val) {
      nums[i] = nums[j - 1];
      j--;
    } else {
      i++;
    }
  }
  return j;
};
// @lc code=end

