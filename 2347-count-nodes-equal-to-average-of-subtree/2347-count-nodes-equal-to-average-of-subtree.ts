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

const averageOfSubtree = (root: TreeNode | null): number => {
    let count = 0;
    const dfs = (node: TreeNode | null) => {
        if(node === null) return {sum: 0, size: 0}

        const left = dfs(node.left)
        const right = dfs(node.right)

        const sum = right.sum + left.sum + node.val
        const size = right.size + left.size + 1;

        if(node.val === Math.floor(sum/size)) count++;
        return {sum, size}
    }

    dfs(root)
    return count
};