import { lengthOfLongestSubstring } from "./app";

test.each([
    { expected: 3, s: "abcabcbb" },
    { expected: 1, s: "bbbbb" },
    { expected: 3, s: "pwwkew" },
    { expected: 3, s: "dvdf" },
    { expected: 3, s: "ohomm" },
    { expected: 10, s: "lsnjvetjnhxvxgmetygveslwlynfqhoezenwkifx"},
    { expected: 5, s: "tmmzuxt"}
])("lengthOfLongestSubstring should return $expected when the input is ($s)", ({ expected, s }) => {
    expect(lengthOfLongestSubstring(s)).toBe(expected);
});