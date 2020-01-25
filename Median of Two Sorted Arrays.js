/*There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5*/

//My solution
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length + nums2.length === 2) return (nums1[0]+nums2[0])/2;
    let half = Math.floor((nums1.length + nums2.length)/2), lowerHalfFound = false;
    element1 = Math.floor(Math.random() * nums1.length), element2 = Math.floor(Math.random() * nums2.length);
    while (!lowerHalfFound) {
        if (element1+element2+2 < half) {
            
        }
    }
};
console.log(findMedianSortedArrays([1,3,5,9],[2,4,6,8]))