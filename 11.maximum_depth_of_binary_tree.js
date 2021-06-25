// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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

const traverseLevel = (node) => {
    if (!node) {
        return 0;
    }

    if (!node.right && !node.left) {
        return 0;
    } else {
        let left = traverseLevel(node.left);
        let right = traverseLevel(node.right);
        return 1 + Math.max(left, right)
    }
}

var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    return 1 + traverseLevel(root)
};