/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// @ts-ignore
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) return null;
  // @ts-ignore
  let current = new ListNode(-1);
  let start = current;
  
  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val <= l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
    } else if (l1) {
      current.next = l1;
      l1 = l1.next;
    } else if (l2) {
      current.next = l2;
      l2 = l2.next;
    }
    
    current = current.next;
  }
  
  return start.next;
};
// @lc code=end

