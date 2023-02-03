function twoSum(nums: number[], target: number): number[] {
    if (nums.length === 2) return [0, 1];

    for (let i1 = nums.length -1; i1 > 0; i1--) {
        let second = nums.slice(0, i1).indexOf(target - nums[i1]);
        if (second !== -1) return [second, i1];
    }
};

export {twoSum};