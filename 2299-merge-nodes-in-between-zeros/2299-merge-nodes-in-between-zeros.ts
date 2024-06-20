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

 /**
 * 1. 현재 노드의 값이 0 이 아니고 다음 노드의 값도 0이 아니면 두 노드의 값을 더해서 현재 노드 값으로 할당하고 다다음 노드를 다음 순서로 배치
   2. 현재 노드의 값이 0 이면 현재 노드의 값을 다음 노드의 값으로 바꾼다(0 삭제)
   3. 다음 노드의 값이 0 이고 그 다음 노드가 존재하지 않으면 다음 노드를 삭제한다 (null)
 */

const mergeNodes = (head: ListNode | null): ListNode | null => {
    if(!head) return head

    const dfs = (node: ListNode | null) => {
        if(!node) return null
        if(node.val !== 0 && node.next?.val !== 0) {
            node.val += node.next?.val
            node.next = node.next?.next
            dfs(node)
        } else if(node.val === 0) {
            node.val = node.next?.val
            node.next = node.next?.next
            dfs(node)
        } else if(node.next?.val === 0 && !node.next?.next) {
            // 마지막 0 제거해주기
            node.next = null
        } else dfs(node.next)
    }

    dfs(head)

    return head
};