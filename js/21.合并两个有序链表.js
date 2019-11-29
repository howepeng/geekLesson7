/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function(l1, l2) {
    let ret = tmp = new ListNode()

    while (l1 || l2) {
        let val
        if (l1 === null) {
            // l1结束,l2没结束
            tmp.next = l2
            break
        }
        if (l2 === null) {
            // l2结束,l1没结束
            tmp.next = l1
            break
        }

        // l1,l2没结束
        if (l1.val < l2.val) {
            val = l1.val
            l1 = l1.next
        } else {
            val = l2.val
            l2 = l2.next
        }
        let node = new ListNode(val)
        tmp.next = node
        tmp = node
    }
    return ret.next
};
// @lc code=end

