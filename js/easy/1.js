/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      hashmap[nums[i]] = i;
    } else {
      const difference = target - nums[i];
      if (hashmap.hasOwnProperty(difference)) {
        return [hashmap[difference], i];
      } else {
        hashmap[nums[i]] = i;
      }
    }
  }
};
