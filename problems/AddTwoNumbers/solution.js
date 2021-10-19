var addTwoNumbersHelper = function(l1, l2) {
    let l1Value = 0;
    let l2Value = 0;
    
    if(l1 && l1.val){
        l1Value = l1.val;
    }
    
    if(l2 && l2.val){
        l2Value = l2.val;
    }
    
    let sum = l1Value + l2Value;
     
    if(sum >= 10){
        l1.val = sum - 10;
        if(!l1.next){
            l1.next = {val: 1, next: null};
        } else {
            l1.next.val += 1;
        }
    } else {
        if(!l1){
            l1 = {val: sum, next: null};
        } else {
            l1.val = sum;
        }
    }
     
    //check if both lists are null
    if(!l1 && !l2){
        return;
    }
    
    //sort out nexts
    let l1Next = null;
    let l2Next = null;
    
    if(l1 && l1.next){
        l1Next = l1.next;
    }
    
    if(l2 && l2.next){
        l2Next = l2.next;
    }
    
    if(!l1Next && !l2Next){
        return;
    }
    
    addTwoNumbersHelper(l1Next, l2Next);
};



// Definition for singly-linked list.
/*
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
     
    //go until one or both lists end
    //if only one ends, then add the overflow to the remaining ones .next.value, repeat again if overflowed again
    
    //add first one, check if next, if next pass it to helper
    let l1Value = 0;
    let l2Value = 0;
    
    if(l1 && l1.val){
        l1Value = l1.val;
    }
    
    if(l2 && l2.val){
        l2Value = l2.val;
    }
    
    l1.val = l1Value + l2Value;
     
    if(l1.val >= 10){
        l1.val -= 10;
        if(!l1.next){
            l1.next = {val: 1, next: null};
        } else {
            l1.next.val += 1;
        }
    }
     
    //check if both lists don't have nexts
    if(l1.next == null && l2.next == null){
        return l1;
    }
    
    
    let l1Next = null;
    let l2Next = null;
    
    if(l1 && l1.next){
        l1Next = l1.next;
    }
    
    if(l2 && l2.next){
        l2Next = l2.next;
    }
    
    addTwoNumbersHelper(l1Next, l2Next);
    
    return l1;
};