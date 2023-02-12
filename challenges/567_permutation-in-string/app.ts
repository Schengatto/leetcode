function checkInclusion(s1: string, s2: string): boolean {
    const toCharMap = (s: string): Object => {
        return [...s].reduce((obj, char) => ({ ...obj, [char]: obj[char] + 1 || 1 }), {});
    }

    const isValidChunk = (chunk: string, target: Object, keys: string[]): boolean => {
        for (let i=0; i<chunk.length; i++) {
            if (!target[chunk[i]]) return false;
            if (target[chunk[i]] === 0) return false;
            target[chunk[i]] = target[chunk[i]]-1;
        }

        for (let i=0; i<keys.length; i++) {
            if (target[keys[i]] > 0) return false;
        }
        return true;
    }

    const s1CharMap: Object = toCharMap(s1);
    const s1CharMapKeys: string[] = Object.keys(s1CharMap);
    let cursor = 0;
    while (cursor <= s2.length-s1.length) {
        let chunk = s2.substring(cursor, cursor + s1.length);
        if (isValidChunk(chunk, {...s1CharMap}, s1CharMapKeys)) return true;
        cursor++;
    }
    return false;
};

export { checkInclusion };