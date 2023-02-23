/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
 
 // 이런 문제 유형은 외울 필요도 있을듯!

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
    let current = head
    while(current) {
        if(current.next && current.val === current.next.val) {
            current.next = current.next.next
        } else current = current.next
    }
    return head
};
