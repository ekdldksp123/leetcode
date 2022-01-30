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


const diameterOfBinaryTree = (root) => {
    let max = 0; 
    const depth = (root) => {
        if(!root) return 0;
        const left = depth(root.left);
        const right = depth(root.right);
        max = Math.max(max, right + left);
        return Math.max(right, left) + 1;
    }
    depth(root);
    return max;
};
