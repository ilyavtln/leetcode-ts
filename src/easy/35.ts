function searchInsert(nums: number[], target: number): number {
  let middleIdx = Math.floor(nums.length / 2)
  let middle = nums[middleIdx];

  if (target > nums[nums.length - 1]) {
    return nums.length
  }
  else if (target <= nums[0]) {
    return 0;
  }

  if (target < middle) {
    for (let i = middleIdx; i >= 0; i--) {
      if (nums[i] >= target && nums[i - 1] < target && i !== 0) {
        return i;
      }
    }
  }
  else if (target > middle) {
    for (let i = middleIdx; i < nums.length; i++) {
      if (nums[i] >= target && nums[i - 1] < target) {
        return i;
      }
    }
  }
  return middleIdx
}