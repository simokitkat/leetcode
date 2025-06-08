export function twoSum(nums: number[], target: number): number[] {
  const hashmap = {};

  const solution: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      hashmap[nums[i]] = i;
    } else {
      const difference = target - nums[i];
      if (hashmap.hasOwnProperty(difference)) {
        solution.push(hashmap[difference], i);
        break;
      } else {
        hashmap[nums[i]] = i;
      }
    }
  }

  return solution;
}
