/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    //2 ideas:
        //calc then sort
        //calc and then insert into array in a sorted manner
     
    
    //1st implementation
    /*
    for(let i = 0; i < nums.length; i++){
        nums[i] *= nums[i]; 
    }
    
    return nums.sort(function (a,b){return a-b});
    */
    
    
    //2nd implementation
    let output = [];
        
    for(let i = 0; i < nums.length; i++){
        let res = nums[i] * nums[i];
        
        if(!output.length || res > output[output.length - 1]){
            output.push(res);
            
        } else if(res < output[0]){
            output.unshift(res);
            
        } else {
            let high = output.length;
            let low = 0;
            
            while(low < high){
                let mid = (low + high) >> 1;
                if(output[mid] < res) low = mid + 1;
                else high = mid;
            }
            
            output.splice(low, 0, res);
        }
    }
    
    return output;
};