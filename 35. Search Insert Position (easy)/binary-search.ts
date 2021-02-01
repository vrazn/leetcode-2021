/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const pivot = Math.floor((left + right)  / 2);
        if (nums[pivot] === target) return pivot;
        if (target < nums[pivot]) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }       
    }
    
    return left;
};
// @lc code=end

