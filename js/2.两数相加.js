/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let start = n = new ListNode()
    let e = new ListNode(0)
    let added = 0
    while(l1 || l2) {
      l1 = l1 || e
      l2 = l2 || e
      let sum = l1.val + l2.val + added
      added = Math.floor(sum / 10)
      n.next = new ListNode(sum % 10)
      n = n.next
      l1 = l1.next
      l2 = l2.next
    }
    if (added) {
      n.next = new ListNode(added)
    }
    return start.next
};
// @lc code=end

