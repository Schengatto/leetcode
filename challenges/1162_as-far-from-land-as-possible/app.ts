function maxDistance(grid: number[][]): number {
    const length: number = grid.length;
    const directions: number[][] = [[0, 1], [-1, 0], [0, -1], [1, 0]];
    const checkField = (x: number, y: number): boolean => x >= 0 && y >= 0 && x < length && y < length;

    let visited = [];
    let queue: number[][] = [];
    // first check on the grid
    grid.forEach((row, i) => {
        // init the visited array of the current row
        visited.push(new Array(row.length).fill(false));
        // put all the lands in the queue
        row.forEach((value, j) => {
            if (value === 1) queue.push([i, j, 0])
        });
    });

    let maxDistance = -1;
    while (queue.length) {
        let [x, y, depth] = queue.shift();

        maxDistance = Math.max(maxDistance, depth);

        for (const direction of directions) {
            let nextX = x + direction[0];
            let nextY = y + direction[1];

            if (checkField(nextX, nextY) && !visited[nextX][nextY] && !grid[nextX][nextY]) {
                visited[nextX][nextY] = true;
                queue.push([nextX, nextY, depth + 1]);
            }
        }
    }

    return !!maxDistance ? maxDistance : -1;
};

export { maxDistance };