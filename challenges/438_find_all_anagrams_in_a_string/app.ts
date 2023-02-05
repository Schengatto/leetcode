function findAnagrams(s: string, p: string): number[] {
    const isAnagram = (wordMap: Object, chunkMap: Object): boolean => {
        for (const char in wordMap) {
            if (!chunkMap[char]) return false;
            if (chunkMap[char] !== wordMap[char]) return false;
        }
        return true;
    }S

    let pCharMap = {};
    let sCharMap = {};
    for (let i = 0; i < p.length; i++) {
        pCharMap[p[i]] = (pCharMap[p[i]] || 0) + 1;
        sCharMap[s[i]] = (sCharMap[s[i]] || 0) + 1;
    }

    let cursor = 0;
    const result = [];
    while (cursor <= s.length - p.length) {
        if (isAnagram(pCharMap, sCharMap)) result.push(cursor);
        const nextCharIdx = cursor + p.length;
        sCharMap[s[nextCharIdx]] = (sCharMap[s[nextCharIdx]] || 0) + 1;
        sCharMap[s[cursor]]--;
        cursor++;
    }
    return result;
};

export { findAnagrams };