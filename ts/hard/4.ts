export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const sortedArr = nums1.concat(nums2);
  sortedArr.sort((a, b) => a - b);
  const half = sortedArr.length / 2;

  if (sortedArr.length % 2) {
    return sortedArr[Math.floor(half)];
  } else {
    return (sortedArr[half] + sortedArr[half - 1]) / 2;
  }
}
