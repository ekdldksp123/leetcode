/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
 /**
   1. 모든 왼쪽 자식은 값이 자기 자신보다 작고 모든 오른쪽 자식은 값이 자기 자신보다 크다
   2. 힌트 - 전위 순회 : 노드를 방문했을때 자기 자신 -> 왼쪽 자식 -> 오른쪽 자식 순으로 방문 (??)
   3. 먼저 역순으로 탐색(오른쪽 -> 노드 -> 왼쪽)하면서 각 노드를 방문할때마다 더한 값을 업데이트 해주면 됨
  */

const bstToGst = (root: TreeNode | null): TreeNode | null => {
    let sum = 0;

    const updateNode = (node) => {
        if (node) {
            // 1. 오른쪽 업데이트
            updateNode(node.right);
            
            // 2. sum에 노드의 값을 더해서 값 업데이트
            sum += node.val;
            node.val = sum;
            
            // 3. 왼쪽 업데이트
            updateNode(node.left);
        }
    };
    updateNode(root);
    return root; 
};