var minimumFuelCost = function (roads, seats) {
    let map = new Map<number, number[]>;
    for (let i = 0; i < roads.length + 1; i++) {
        if (i >= roads.length) map.set(i, []);
        else {
            const city1 = roads[i][0];
            const city2 = roads[i][1];
            map.has(city1) ? map.get(city1).push(city2) : map.set(city1, [city2]);
            map.has(city2) ? map.get(city2).push(city1) : map.set(city2, [city1]);
        }
    }

    var fuel = 0;
    const dfs = (node, parent) => {
        let people = 1;
        for (let child of map.get(node)) {
            if (child === parent) continue;
            people += dfs(child, node);
        }
        if (node != 0) fuel += Math.ceil(people / seats);
        return people;
    }

    // start
    dfs(0, -1);
    return fuel;
};

export { minimumFuelCost };