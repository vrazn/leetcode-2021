/*
 * For each element (i) in the array we start another loop,
 * trying to find the next element, which will be equal to
 * `target - current`.
 * Compexity: Space O(n^2)
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
  throw new Error('Solution does not exist!');
}
