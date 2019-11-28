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
    var j = k % length
    if (j === 0) {
        return
    }
    reverse(nums, 0, length - 1);
    reverse(nums, 0, j - 1);
    reverse(nums, j, length - 1);
};

var reverse= function(nums, start, end) {
    while (start < end) {
        temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// @lc code=end

