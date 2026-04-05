function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map();
  const solution: number[] = [];

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
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
