function jump(nums: number[]): number {
    // No needs any jump
    if (nums.length === 1) return 0;

    let jumps = nums.length;
    const lastIndexNums = nums.length - 1;

    const exploreNode = (length: number, currentPosition: number): void => {
        const currentMaxJumpLength = nums[currentPosition];
        // check if I can finish within a jump from the current postion
        if (currentMaxJumpLength >= lastIndexNums - currentPosition) {
            jumps = length + 1;
        }
        else {
            const start = currentPosition + 1;
            const end = Math.min(currentMaxJumpLength + start, nums.length);

            let maxValue = 0;
            let maxValueIndex = 0;
            for (let i = start; i < end; i++) {
                if (maxValue + maxValueIndex < nums[i] + i) {
                    maxValue = nums[i];
                    maxValueIndex = i;
                }
            }

            if (maxValue > 0) {
                exploreNode(length + 1, maxValueIndex);
            }
        }
    }

    // start from first value
    exploreNode(0, 0);
    return jumps;
};

export { jump };