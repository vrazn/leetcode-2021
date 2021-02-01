/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function crossSum(nums: number[], left: number, right: number, p: number) {
  if (left === right) return nums[left];

  let leftSubsum = -Infinity;
  let currSum = 0;
  for (let i = p; i > left - 1; --i) {
    currSum += nums[i];
    leftSubsum = Math.max(leftSubsum, currSum);
  }

  let rightSubsum = -Infinity;
  currSum = 0;
  for (let i = p + 1; i < right + 1; ++i) {
    currSum += nums[i];
    rightSubsum = Math.max(rightSubsum, currSum);
  }

  return leftSubsum + rightSubsum;
}

function divideAndCouquer(nums: number[], left: number, right: number) {
  if (left === right) return nums[left];

  let p = Math.floor((left + right) / 2);

  let leftSum = divideAndCouquer(nums, left, p);
  let rightSum = divideAndCouquer(nums, p + 1, right);
  let cSum = crossSum(nums, left, right, p);

  return Math.max(Math.max(leftSum, rightSum), cSum);
}

// @ts-ignore Duplicate function implementation
function maxSubArray(nums: number[]): number {
  return divideAndCouquer(nums, 0, nums.length - 1);
}
// @lc code=end
