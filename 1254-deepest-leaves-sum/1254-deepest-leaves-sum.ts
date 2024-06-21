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

const deepestLeavesSum = (root: TreeNode | null): number => {
    let depth = 0;
    let sum = 0;

    const bfs = (node: TreeNode | null, deep: number) => {
        if(!node) return;
        if(deep > depth) {
            depth = deep;
            sum = 0;
        }

        bfs(node.left, deep + 1)
        bfs(node.right, deep + 1)

        if(deep === depth) sum += node.val;
    }

    bfs(root, 0)

    return sum
};