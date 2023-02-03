function convert(s: string, numRows: number): string {
    let result = {}
    let cursor = 0;

    const elaborateCurrentChar = (row): void => {
        result = { ...result, [row]: `${result[row] || ""}${s[cursor]}` };
        cursor++;
    };

    const writeColumn = (): void => {
        const columnLength = Math.min(s.length - cursor, numRows);
        for (let row = 0; row < columnLength; row++) {
            elaborateCurrentChar(row);
        }
    }

    const writeDiagonal = (): void => {
        let row = numRows - 2;
        const diagonalLength = Math.min(s.length - cursor, numRows - 2);
        for (let id = 0; id < diagonalLength; id++) {
            elaborateCurrentChar(row);
            row--;
        }
    }

    while (cursor < s.length) {
        writeColumn();
        writeDiagonal();
    }
    return Object.values(result).join("");
};

export {convert};