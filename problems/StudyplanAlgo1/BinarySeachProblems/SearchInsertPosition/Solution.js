/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //for loop
    //compare until target either = nums[i] or > nums[i] 
    //if target is > nums[i], place it at nums[i-1]
    //else return value at nums[i]
    
    //1st solution
    /*
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            return i;
            
        } else if(nums[i] > target){
            return i - 1;
            
        } else if(i == nums.length - 1){
            return nums.length;
        }
    }
    */
    
    //final solution
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= target){
            return i;
        }
    }

    return nums.length;
};