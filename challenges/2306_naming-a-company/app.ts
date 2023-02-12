function distinctNames(ideas: string[]): number {
    let count = 0;
    const map = ideas.reduce((output, current) => output.set(current, [current.substring(0,1), current.substring(1)]), new Map<string, string[]>());

    // Need to be optimized for better performance
    for (let i = 0; i < ideas.length; i++) {
        const mapValueFirst = map.get(ideas[i]);
        for (let j = i+1; j < ideas.length; j++) {
            if (j === i) continue;

            const mapValueSecond = map.get(ideas[j]);
            if (mapValueFirst[0] === mapValueSecond[0]) continue;

            const ideaA = mapValueSecond[0] + mapValueFirst[1];
            if (map.has(ideaA)) continue;
            const ideaB = mapValueFirst[0] + mapValueSecond[1];
            if (map.has(ideaB)) continue;
            count +=2;
        }
    }
    return count;
};

export { distinctNames };