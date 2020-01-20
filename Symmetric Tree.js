/*Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

1
/ \
2   2
/ \ / \
3  4 4  3


But the following [1,2,2,null,3,null,3] is not:

1
/ \
2   2
\   \
3    3


Note:
Bonus points if you could solve it both recursively and iteratively.*/

//My solution
var isSymmetric = function(root) {
    return root !== null ? mirror(root.left, root.right) : true;
};

function mirror(l, r) { //looked up some info being stuck for a bit
    if (l == null && r == null) return true;
    if (l !== null && r !== null && l.val == r.val) return mirror(l.left, r.right) && mirror(l.right, r.left);
    return false;
}