/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
    return makeBST(nums, 0, nums.length - 1)
};

const makeBST = (nums, start, end) => {
    if(start > end) return null
    
    const mid = Math.trunc((start + end) / 2)
    let root = new TreeNode(nums[mid])
    root.left = makeBST(nums, start, mid - 1)
    root.right = makeBST(nums, mid + 1, end)
    
    return root
}

/*
* 1. 배열의 중앙 인덱스(mid)를 루트 노드로 생성한다.

* 2. 배열의 시작 인덱스(0)부터 mid-1 인덱스를 루트의 왼쪽 노드로 지정한다.

* 3. mid+1 인덱스부터 배열의 마지막 인덱스(length-1)까지 오른쪽 노드로 지정한다.

* 4. 이를 재귀로 구현하여 최상위의 루트 노드를 반환한다.
*
*/