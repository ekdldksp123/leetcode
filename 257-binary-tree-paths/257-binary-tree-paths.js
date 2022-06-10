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
 * @return {string[]}
 */
const binaryTreePaths = (root) => {
    const paths = []
    const dfs = (root, path) => {
        if (!root) return; //이 함수가 선언된 함수까지 종료시켜버린다.
        
        const leaf = !root.left && !root.right;
        path = path.length ? path+'->'+root.val : String(root.val);
        if (leaf) {
            paths.push(path);
            return;
        }

        dfs(root.left, path);
        dfs(root.right, path);
    }
    
    dfs(root, '');
    
    return paths;
};