import { addTwoNumbers, ListNode } from "./app";

const convertToListNode = (nums: number[]): ListNode => {
    return nums.reverse().reduce((prev, curr) => {
        if (prev === null) {
            return new ListNode(curr);
        } else {
            return new ListNode(curr, prev);
        }
    }, null as ListNode | null);
}

test.each([
    {
        expected: [6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        l1: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        l2: [5, 6, 4]
    },
    {
        expected: [7, 0, 8],
        l1: [2, 4, 3],
        l2: [5, 6, 4]
    },
    {
        expected: [0],
        l1: [0],
        l2: [0]
    },
    {
        expected: [8, 9, 9, 9, 0, 0, 0, 1],
        l1: [9, 9, 9, 9, 9, 9, 9],
        l2: [9, 9, 9, 9]
    },
])("addTwoNumbers should return $expected when the input is ($l1, $l2)", ({ expected, l1, l2 }) => {
    const result = addTwoNumbers(convertToListNode(l1), convertToListNode(l2));
    expect(result).toEqual(convertToListNode(expected));
});
