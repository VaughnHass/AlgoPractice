/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    //solution 1
    // for(let i = 0; i < k; i++){
    //     nums.unshift(nums.pop());
    // }
    
    //solution 2
    // while(k > 0){
    //     nums.unshift(nums.pop());
    //     k--;
    // }
    
    //solution 3
    // while(k > 0){
    //     nums.splice(0, 0, nums.pop());
    //     k--;
    // }
    
    //solution 4
    //grab the last k elements of nums
    nums = nums.splice(nums.length - k, k).concat(nums);
    
};