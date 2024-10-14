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
 const gcd = (a: number, b: number): number => {
    while (a != 0) {
        const c = a;
        a = b % a;
        b = c;
    }
    return b;
}

const insertGreatestCommonDivisors = (head: ListNode | null): ListNode | null => {
    let node = head; 
    while (node.next != null) {
        node.next = new ListNode(gcd(node.val, node.next.val), node.next);
        node = node.next.next
    }
    return head;
};