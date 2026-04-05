/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  const hashMap = new Map();
  const solution = [];

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (hashMap.has(difference)) {
      solution.push(hashMap.get(difference), i);
      break;
    } else {
      hashMap.set(nums[i], i);
    }
  }

  return solution;
};
