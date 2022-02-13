/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const isPalindrome = (head) => {
    const arr = [];
    
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    
    if(arr.length === 1) return true;
    
    return arr.reduce((acc, cur, idx, arr) => {
        if(idx <= arr.length/2 - 1) {
            if(!(arr[idx] === arr[arr.length-(idx+1)])) {
                acc = false;
            }
        }    
        return acc;
    }, true);
};





