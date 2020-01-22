/*Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.*/

//My solution
var minDepth = function(root) { //Note to self: this solution is slower than most
    if (root === null) return 0;
    if (root.left) {
        if (root.right) return Math.min(1 + minDepth(root.left), 1 + minDepth(root.right));
        else return (1 + minDepth(root.left));
    }
    else if (root.right) return (1 + minDepth(root.right));
    return 1;
};