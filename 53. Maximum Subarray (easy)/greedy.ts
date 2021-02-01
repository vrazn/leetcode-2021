/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
// @ts-ignore Duplicate function implementation
function maxSubArray(nums: number[]): number {
  let localSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // if the new sum will be less than the number itself - set the sum to this number
    // otherwise - update the sum
    localSum = nums[i] + localSum > nums[i] ? nums[i] + localSum : nums[i];
    maxSum = localSum > maxSum ? localSum : maxSum;
  }

  return maxSum;
}
// @lc code=end
