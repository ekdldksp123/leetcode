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
    if(!head || !head.next || k === 0) return head

    let length = 1
    let last = head
    while(last.next) {
        length ++
        last = last.next
    }

    k %= length
    if(k === 0) return head

    let curr = head
    let count = 1
    while(count < length - k) {
        curr = curr.next!
        count++
    }

    // curr.next = 실제 회전해서 앞으로 가는 부분. val 은 버림
    let newHead = curr.next
    // curr의 next 를 null로 할당함으로써 newHead 부분을 잘라내고 head 에서는 newHead를 잘라냄
    curr.next = null
    // 마지막 요소에 회전된 뒷 부분을 연결
    last.next = head
    // last(회전부 연결), curr(회전 주체), newHead(회전된 앞부분) 모두 head를 참조하고 있기에 연결되서 리턴
    return newHead
};