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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);

    let fast: ListNode = dummy;
    let slow: ListNode = dummy;

    // fast를 slow보다 n칸 앞에 배치
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // slow가 삭제 대상의 바로 앞에 오도록 이동
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // slow.next가 삭제할 노드
    if (slow.next !== null) {
        slow.next = slow.next.next;
    }

    return dummy.next;
};