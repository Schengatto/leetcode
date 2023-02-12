import { maxDistance } from "./app";

test.each([
    { expected: 2, grid: [[1, 0, 1], [0, 0, 0], [1, 0, 1]] },
    { expected: 4, grid: [[1, 0, 0], [0, 0, 0], [0, 0, 0]] },
    { expected: 2, grid: [[0, 0, 1, 1, 1], [0, 1, 1, 0, 0], [0, 0, 1, 1, 0], [1, 0, 0, 0, 0], [1, 1, 0, 0, 1]] }
])("maxDistance should return $expected when the input is ($grid)", ({ expected, grid }) => {
    expect(maxDistance(grid)).toBe(expected);
});