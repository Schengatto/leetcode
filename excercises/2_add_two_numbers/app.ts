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

export {addTwoNumbers, ListNode};