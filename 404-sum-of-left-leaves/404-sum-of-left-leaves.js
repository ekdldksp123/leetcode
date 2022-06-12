/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = (root) => {
    if(!root) return 0
    return getSum(root, false)
};

const getSum = (root, isLeft) => {
    if(!root) return 0
    if(!root.left && !root.right) return (isLeft) ? root.val : 0
    
    return getSum(root.left, true) + getSum(root.right, false)
}

/*
* [dfs] 풀이 방식
* 1. getSum 함수를 따로 선언한다
*   1-1. 이때 자식 노드가 없고(!root.left && !root.right), 부모 노드의 왼쪽이라면 (isLeft === true) root.val 을 리턴한다.
*   1-2. root.left 와 root.right 를 재귀로 호출해 더한값을 리턴한다
* 2. root 가 null 이면 0 을 리턴하고, 아니면 getSum(root, false) 를 리턴한다
*/