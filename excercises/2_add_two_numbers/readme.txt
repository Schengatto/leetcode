/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    toString(): string {
        return JSON.stringify(this);
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 || !l2) return null;

    let l1v = [`${l1.val}`];
    while (!!l1.next) {
        l1 = l1.next;
        l1v.unshift(`${l1.val}`);
    }

    let l2v = [`${l2.val}`];
    while (!!l2.next) {
        l2 = l2.next;
        l2v.unshift(`${l2.val}`);
    }
    const result = String(BigInt(l1v.join("")) + BigInt(l2v.join("")));
    let output = new ListNode(Number(result[0]));
    for (let i = 1; i < result.length; i++) {
        output = new ListNode(Number(result[i]), output);
    }
    return output;
};


const convertToListNode = (nums: number[]): ListNode => {
    return nums.reverse().reduce((prev, curr) => {
        if (prev === null) {
            return new ListNode(curr);
        } else {
            return new ListNode(curr, prev);
        }
    }, null as ListNode | null);
}

// Tests
const start = new Date();
// console.log([7,0,8], addTwoNumbers(convertToListNode([2,4,3]), convertToListNode([5,6,4])));
console.log([6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], addTwoNumbers(convertToListNode([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
), convertToListNode([5, 6, 4])));
// console.log([0], addTwoNumbers([0], [0]));
// console.log([8,9,9,9,0,0,0,1], addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));
console.log("FINISH in", new Date().getTime() - start.getTime())