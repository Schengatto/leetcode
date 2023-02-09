import { totalFruit } from "./app";

test.each([
    { expected: 3, fruits: [1, 2, 1] },
    { expected: 2, fruits: [1, 1] },
    { expected: 3, fruits: [0, 1, 2, 2] },
    { expected: 4, fruits: [1, 2, 3, 2, 2] },
    { expected: 3, fruits: [2, 1, 4, 2, 2] }, // 4, 2, 2
    { expected: 5, fruits: [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4] },
    { expected: 5, fruits: [0, 1, 6, 6, 4, 4, 6] },
    { expected: 12, fruits: [51,51,60,78,39,57,39,72,39,72,71,71,72,31,72,72,64,98,98,4,4,98,4,98,98,4,4,4,4,84,84,84,58,84,39,66,39,26,1,1,55,1,55,1,1,1,65,96,40,3,44,23,93,23,23,82,23,82,75,82,62,10,33,51,22,22,22,47,22,37,37,67,0,0,67,0,97,89,97,84,84,97,66,74,95,74,6,68,68,6,38,38,85,50,50,85,73,73,38,54] },
])("totalFruit should return $expected when the input is ($fruits)", ({ expected, fruits }) => {
    expect(totalFruit(fruits)).toBe(expected);
});