import { isAlienSorted } from "./app";

test.each([
    { expected: true, words: ["hello", "leetcode"], order: "hlabcdefgijkmnopqrstuvwxyz" },
    { expected: false, words: ["word", "world", "row"], order: "worldabcefghijkmnpqstuvxyz" },
    { expected: false, words: ["apple", "app"], order: "abcdefghijklmnopqrstuvwxyz" },
    { expected: false, words: ["aa", "a"], order: "abqwertyuioplkjhgfdszxcvnm" },
    { expected: false, words: ["kuvp", "q"], order: "abqwertyuioplkjhgfdszxcvnm" },
    { expected: true, words: ["hello", "hello"], order: "abcdefghijklmnopqrstuvwxyz" },
    { expected: false, words: ["fxasxpc", "dfbdrifhp", "nwzgs", "cmwqriv", "ebulyfyve", "miracx", "sxckdwzv", "dtijzluhts", "wwbmnge", "qmjwymmyox"], order: "zkgwaverfimqxbnctdplsjyohu" },
])("isAlienSorted should return $expected when the input is ($words, $order)", ({ expected, words, order }) => {
    expect(isAlienSorted(words, order)).toBe(expected);
});
