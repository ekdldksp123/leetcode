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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(head === null || head.next === null || k === 0) return head

    let n = 0
    let curr: ListNode | null = head
    let last: ListNode | null = null

    while(curr) {
        if(curr.next === null) {
            last = curr
        }
        curr = curr.next
        n++
    }

    k = k % n
    if(k === 0) return head
    curr = head

    for(let i=0; i < n - k - 1; i++) {
        curr = curr.next
    }

    let newHead = curr.next
    curr.next = null
    last.next = head
    return newHead
};