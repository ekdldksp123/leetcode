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


const gcd = (a:number, b:number) => {
    if(b === 0) return a
    return gcd(b, a % b)
}

const insertGreatestCommonDivisors = (head: ListNode | null): ListNode | null => {
    let val: ListNode | null = head, next: ListNode | null = head.next

    while(next) {
        val.next = new ListNode(gcd(val.val, next.val), next)

        val = next
        next = next.next
    }
    return head
};