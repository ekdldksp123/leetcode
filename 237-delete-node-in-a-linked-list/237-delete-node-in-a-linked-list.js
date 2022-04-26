/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = (node) => {
    node.val = node.next.val
    node.next = node.next.next
};

/*
* 1. 이미 node 주소값은 제거해야 할 val 이 속한 노드리스트 전체의 주소값을 바라보고 있기 때문에
* 2. node = node.next 를 해도 주소값은 변하지 않는다
*/