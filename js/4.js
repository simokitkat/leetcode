/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const sortedArr = nums1.concat(nums2);
  sortedArr.sort((a, b) => a - b);
  const half = sortedArr.length / 2;

  if (sortedArr.length % 2) {
    return sortedArr[Math.floor(half)];
  } else {
    return (sortedArr[half] + sortedArr[half - 1]) / 2;
  }
};
