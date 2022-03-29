/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let index = 0;
 
    while(nums[index] <= target){
        if(nums[index] == target) return index;
        
        index++;
    }
 
    return -1;
};