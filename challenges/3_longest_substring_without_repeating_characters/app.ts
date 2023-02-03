function lengthOfLongestSubstring(s: string): number {
    const uniqueChars = [...new Set(s)].join("");
    if (s.includes(uniqueChars)) return uniqueChars.length;

    let cursor = 0;
    let result = 0;
    let queue = [];

    while (cursor < s.length) {
        let distance = s.length - cursor;
        let seq = "";

        while (distance > 0 && cursor < s.length) {
            const nextIndexOfChar = s.indexOf(s[cursor], cursor + 1);

            if (nextIndexOfChar >= 0) {
                distance = Math.min(nextIndexOfChar - cursor, distance) - 1;
                if (!queue.includes(cursor + 1)) {
                    queue.push(cursor + 1);
                }
            } else {
                distance--;
            }

            seq += s[cursor];
            cursor++;
        }

        result = Math.max(seq.length, result);
        cursor = queue.length ? queue.shift() : cursor;
    }

    return result;
}

export { lengthOfLongestSubstring };