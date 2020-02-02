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
    if (nums1.length === 0) return (nums2.length % 2 === 1) ? nums2[Math.ceil((nums2.length-1)/2)] : 
        (nums2[nums2.length/2]+nums2[nums2.length/2-1])/2
    if (nums2.length === 0) return (nums1.length % 2 === 1) ? nums1[Math.ceil((nums1.length-1)/2)] : 
        (nums1[nums1.length/2]+nums1[nums1.length/2-1])/2
    if (nums1.length + nums2.length === 2) return (nums1[0]+nums2[0])/2;

    let totalLength = nums1.length + nums2.length,
        half = Math.ceil(totalLength/2),
        ele1 = Math.floor(Math.random() * nums1.length), 
        ele2 = Math.floor(Math.random() * nums2.length),
        filled = 0;

    while (true) {
        filled = ele1+ele2+2;
        if (filled < half) {    //select an index for each array such that they are evenly divided when combined
            if (nums2[ele2] > nums1[ele1]) {
                ele1 += half - filled;
                if (ele1 >= nums1.length) {ele2 += ele1+1-nums1.length; ele1 = nums1.length-1}
            }
            else {
                ele2 += half - filled;
                if (ele2 >= nums2.length) {ele1 += ele2+1-nums2.length; ele2 = nums2.length-1}
            } 
        }
        else if (filled > half) {
            if (nums2[ele2] > nums1[ele1]) {
                ele2 -= filled - half;
                if (ele2 < -1) {ele1 -= -ele2-1; ele2 = -1;}
            }
            else {
                ele1 -= filled - half;
                if (ele1 < -1) {ele2 -= -ele1-1; ele1 = -1;}
            }
        }
        else {  //determine if the lower half of a combined array actually has all lower numbers
            if (ele1 === -1) {
                if (nums1[0] >= nums2[ele2])
                    return (totalLength % 2 === 1) ? nums2[ele2] : (nums2[ele2+1]) ? 
                        (nums2[ele2] + Math.min(nums2[ele2+1], nums1[0]))/2 : (nums2[ele2] + nums1[0])/2;
                else {ele1++; ele2--;}
            }
            else if (ele2 === -1) {
                if (nums2[0] >= nums1[ele1])
                    return (totalLength % 2 === 1) ? nums1[ele1] : (nums1[ele1+1]) ? 
                        (nums1[ele1] + Math.min(nums1[ele1+1], nums2[0]))/2 : (nums1[ele1] + nums2[0])/2;
                else {ele2++; ele1--;}
            }
            else if (ele1 === nums1.length-1) {
                if (nums1[ele1] <= nums2[ele2+1])
                    return (totalLength % 2 === 1) ? Math.max(nums1[ele1], nums2[ele2]) : 
                        (Math.max(nums1[ele1], nums2[ele2]) + nums2[ele2+1])/2;
                else {ele1--; ele2++;} 
            }
            else if (ele2 === nums2.length-1) {
                if (nums2[ele2] <= nums1[ele1+1])
                    return (totalLength % 2 === 1) ? Math.max(nums1[ele1], nums2[ele2]) : 
                        (Math.max(nums1[ele1], nums2[ele2]) + nums1[ele1+1])/2;
                else {ele2--; ele1++;}
            }
            else {
                if (nums1[ele1] <= nums2[ele2+1]) {
                    if (nums2[ele2] <= nums1[ele1+1]) 
                        return (totalLength % 2 === 1) ? Math.max(nums1[ele1], nums2[ele2]) : 
                            (Math.max(nums1[ele1], nums2[ele2]) + Math.min(nums1[ele1+1], nums2[ele2+1]))/2;
                    else {ele2--; ele1++;}
                }
                else {ele1--; ele2++;}
            }
        }
    }
}