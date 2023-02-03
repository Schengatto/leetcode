function isAlienSorted(words: string[], order: string): boolean {
    // No need to sort array with at least 2 words.
    if (words.length < 2) return;

    const dictionary = Array.from(order).reduce((dict, char, index) => ({ ...dict, [char]: index }), {});

    for (let wordIdx = 1; wordIdx < words.length; wordIdx++) {
        const curr = words[wordIdx];
        const prev = words[wordIdx-1];
        if (curr === prev) continue;

        const lengthToCheck = Math.min(curr.length, prev.length);
        for (let index = 0; index < lengthToCheck; index++) {
            const curValue = dictionary[curr[index]];
            const prevValue = dictionary[prev[index]];

            if (curValue > prevValue) break;
            else if (curValue < prevValue) return false;
        };
        if ((curr.length === lengthToCheck) && (dictionary[prev[lengthToCheck -1]] === dictionary[curr[lengthToCheck-1]])) {
            return false;
        }
    }
    return true;
};

export {isAlienSorted};