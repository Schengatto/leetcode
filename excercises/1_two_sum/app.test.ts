import { twoSum } from "./app";

test.each([
    {
        expected: [0, 1],
        nums: [2, 7, 11, 15],
        target: 9
    },
    {
        expected: [1, 2],
        nums: [3, 2, 4],
        target: 6
    },
    {
        expected: [0, 1],
        nums: [3, 3],
        target: 6
    },
    {
        expected: [0, 2],
        nums: [3, 2, 3],
        target: 6
    },
    {
        expected: [0, 2],
        nums: [-3, 4, 3, 90],
        target: 0
    },
    {
        expected: [0, 3],
        nums: [0, 4, 3, 0],
        target: 0
    },
    {
        expected: [0, 1],
        nums: [2, 4, 11, 3],
        target: 6
    },
])("addTwoNumbers should return $expected when the input is ($s, $numRows)", ({ expected, nums, target }) => {
    const result = twoSum(nums, target);
    expect(result).toEqual(expected);
});