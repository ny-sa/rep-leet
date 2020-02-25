/*Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

Example:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8
Note: 
You may assume that nums' length ≥ k-1 and k ≥ 1.*/

//My solution
const KthLargest = function(k, nums) {
  this.k = k
  this.nums = nums;
};

KthLargest.prototype.add = function(val) {
  this.nums.push(val);
  return this.nums.sort((a, b) => b - a)[this.k-1];
};

let test = new KthLargest(4, [9,3,1,6])

console.log(test.add(8));

//not efficient, use a priority queue