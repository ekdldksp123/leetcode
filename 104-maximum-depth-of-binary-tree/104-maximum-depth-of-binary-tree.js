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
 const depth = (node) => {
        if(!node) return 0;
        let left = depth(node.left);
        let right = depth(node.right);
        
        return 1 + Math.max(left, right);
}
const maxDepth = (root) => {
   
    return depth(root)
};

