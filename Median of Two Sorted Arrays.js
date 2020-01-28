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
        ele1 = Math.floor(Math.random() * nums1.length), 
        ele2 = Math.floor(Math.random() * nums2.length);
        filled;
    while (!lowerHalfFound) {
        switch (filled = ele1+ele2+2) {
            case (filled < half): 
                if (nums2[ele2] > num1[ele1])
                    ele1 += half - filled;
                else ele2 += half - filled;
                break;
            case (filled > half):
                if (nums2[ele2] > num1[ele1])
                    ele2 -= half - filled;
                else ele1 += half - filled;
                break;
            default:
                
                break;
        }

    }
};
console.log(findMedianSortedArrays([1,2,3,4],[5,6,7,8]))