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

const insertGreatestCommonDivisors = (head: ListNode | null): ListNode | null => {

    const recur = (node: ListNode | null) => {
        if(!node || !node?.next || !node?.next?.val) return node

        if(node.val && node.next) {
            const val = node.val
            const next = node.next

            let gcd = 1;
            for(let i=2; i<=Math.min(val, next?.val); i++){
                if(val % i === 0 && next?.val % i === 0){
                    gcd = i;
                }
            }
            node.next = new ListNode(gcd, next)
            recur(next)
        } 
    }  

    recur(head)
    return head
};