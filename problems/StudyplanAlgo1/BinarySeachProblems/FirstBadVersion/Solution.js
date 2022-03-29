/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lastMiddle = 0;
        let middle = n/2;
        let firstBad = 0;
        let trueFirstBad = 0;
    
        while(!firstBad){
            //start in the middle of 0 & N
    
            //if good, increase to middle of lastMiddle & N
    
            //repeat until bad is found
            
            if(isBadVersion(middle)){
                firstBad = middle;
                //lastMiddle = middle;
                //middle /= 2;
                
            }else {
                lastMiddle = middle;
                middle = n - middle/2;
            }
        }
        
        //at this point, we have found the first bad one & reduced the possible locations of the 1st bad to between last middle & middle
        
        while(!trueFirstBad){
            lastMiddle = middle;
            middle /= 2;
            
            //if bad, decrease to middle/2 until good is found
            
            //when good is found, increase by 2 until bad is found again
        }
    };
};