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
    var ret = []
    var j = k % length
    if (j === 0) {
        return
    }
    for (let i = 0; i < j; i++) {
        ret[j - i - 1] = nums[length - i - 1]
    }
    for (let i = j; i < length; i++) {
        ret[i] = nums[i - j]
    }
    for (let i = 0; i < length; i++) {
        nums[i] = ret[i]
    }
};
// @lc code=end

