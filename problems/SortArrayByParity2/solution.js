/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
 /*
 Solution ideas:
    - create 2 arrays & sort num into them, one holds even & one holds odds. Then combine.
        - comp: o(2n), storage: o(3n)
        
    - do it in place:
        - start at i = 0 (loop)
            - if 0 is even, move to 1. if 1 is odd, move to 2...
            - when you get to one that is out of place: 
                - store the index of it
                - then move to next index & see if it is the proper parity (loop)
                    - if it isnt, continue on
                    - if it is, swap it with the element at the stored index
                    - exit loop
            - once a swap is made, continue main loop from index stored + 1
            - exit loop when i = nums.length - 1
        - return nums
 */
var sortArrayByParityII_Easy = function(nums) {
    let even = [];
    let odd = [];
    let out = [];
    
    
    nums.forEach((num) => {
        num%2 === 0 ? even.push(num) : odd.push(num);
    });
     
    while(even != false || odd != false){
        if(even != false) out.push(even.pop());
        if(odd != false) out.push(odd.pop());
    }
    
    return out;
};

function searchFromIndex(i, arr, evenOrOdd){
    /*
    searches through arr starting at i+1, in the + direction
    
    returns index of first value that:
      - matches req of evenOrOdd (true: even,...)
      - is also in the wrong index Parity-wise
    */
    i = i + 1;
    
    while(i < arr.length){
        if(evenOrOdd && i % 2 === 1 && arr[i] % 2 === 0){
            return i;
        }
        if(!evenOrOdd && i % 2 === 0 && arr[i] % 2 === 1){
            return i;
        }
        
        i++;
    }
}

var sortArrayByParityII_InPlace = function(nums) {
    for(let i = 0; i < nums.length; i++){
        
        if(i % 2 === 0 && nums[i] % 2 === 1){ //even action condition
            //find index of element to swap
            let indexToSwap = searchFromIndex(i, nums, true);
            //do swap
            [nums[i], nums[indexToSwap]] = [nums[indexToSwap], nums[i]];
            
            
        } else if(i % 2 === 1 && nums[i] % 2 === 0) { //odd action condition
            //find index of element to swap
            let indexToSwap = searchFromIndex(i, nums, false);
            //do swap
            [nums[i], nums[indexToSwap]] = [nums[indexToSwap], nums[i]];
            
        }
    }
    
    return nums;
};

function driver(){
    let input = [4,2,5,7];
    let output = [];
    
    //output = sortArrayByParityII_Easy(input);
    output = sortArrayByParityII_InPlace(input);
    
    console.log(output);
}

driver();