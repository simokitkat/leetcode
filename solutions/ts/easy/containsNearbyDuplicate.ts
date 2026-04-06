function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const hashSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (hashSet.has(nums[i])) {
      return true;
    } else {
      hashSet.add(nums[i]);

      if (hashSet.size > k) {
        hashSet.delete(nums[i - k]);
      }
    }
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
