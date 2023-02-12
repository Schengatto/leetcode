import { convert } from "./app";

test.each([
    { expected: "PAHNAPLSIIGYIR", s: "PAYPALISHIRING", numRows: 3 },
    { expected: "PINALSIGYAHRPI", s: "PAYPALISHIRING", numRows: 4 },
    { expected: "A", s: "A", numRows: 1 },
])("convert should return $expected when the input is ($s, $numRows)", ({ expected, s, numRows }) => {
    expect(convert(s, numRows)).toBe(expected);
});