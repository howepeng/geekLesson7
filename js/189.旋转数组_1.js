/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const length = nums.length
    for (let i = 0; i < k; i++) {
        // 取出最后一个
        const element = nums[length -1]
        // 依次后移
        for (let j = length - 1; j > 0; j--) {
            nums[j] = nums[j - 1]
        }
        // 替换第一个
        nums[0] = element
    }
    return nums
};
// @lc code=end

