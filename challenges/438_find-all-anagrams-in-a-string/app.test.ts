import { findAnagrams } from "./app";

test.each([
    { expected: [0, 6], s: "cbaebabacd", p: "abc" },
    { expected: [0, 1, 2], s: "abab", p: "ab" },
])("findAnagrams should return $expected when the input is ($s1, $s2)", ({ expected, s, p }) => {
    expect(findAnagrams(s, p)).toEqual(expected);
});