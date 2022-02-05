/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
    if(!head) return false;
    let slow = head, fast = head;
    
    //토끼와 거북이 알고리즘 - 공간 복잡도가 거의 없다고 함
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(fast === slow) return true;
    }
    return false;
};