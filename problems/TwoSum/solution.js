/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    //outer loop goes to 2nd to last element
    for(let o = 0; o < nums.length - 1; o++){
        
        //inner loop goes to last element
        for(let i = o + 1; i < nums.length; i++){
            if(nums[o] + nums[i] === target) return [o, i];
        }
    }
};