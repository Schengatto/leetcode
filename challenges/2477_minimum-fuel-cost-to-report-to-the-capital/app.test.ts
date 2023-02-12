import { minimumFuelCost } from "./app";

test.each([
    { expected: 3, roads: [[0, 1], [0, 2], [0, 3]], seats: 5 },
    // { expected: 7, roads: [[3, 1], [3, 2], [1, 0], [0, 4], [0, 5], [4, 6]], seats: 2 },
    // { expected: 0, roads: [], seats: 1 },
])("minimumFuelCost should return $expected when the input is ($roads, $seats)", ({ expected, roads, seats }) => {
    expect(minimumFuelCost(roads, seats)).toBe(expected);
});