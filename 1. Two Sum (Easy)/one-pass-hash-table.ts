/*
 * We start by creating a simple hash map (number -> index in the array)
 * While iterating through the array, we check whether the map already has
 * the number which would complement the current one to meet the target.
 * If it doesn't - we add the current item to the map and continue
 * Complexity: Space O(n), Time O(n)
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  throw new Error('Solution does not exist!');
}
