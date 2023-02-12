import { distinctNames } from "./app";

test.each([
    { expected: 6, ideas: ["coffee", "donuts", "time", "toffee"] },
    { expected: 0, ideas: ["lack", "back"] },
    { expected: 8, ideas: ["vopo", "cime", "car", "time", "cane", "vime", "topo"] },
    { expected: 10, ideas: ["rana", "topo", "gatto", "talpa"] },
])("distinctNames should return $expected when the input is ($ideas)", ({ expected, ideas }) => {
    expect(distinctNames(ideas)).toBe(expected);
});