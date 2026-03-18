import {addTwoNumbers, ListNode} from "./addTwoNumbers";

const tests = [
    {
        input: {
            l1: [2, 4, 3],
            l2: [5, 6, 4]
        },
        expected: [7,0,8]
    },
    {
        input: {
            l1: [0],
            l2: [0]
        },
        expected: [0]
    },
    {
        input: {
            l1: [9,9,9,9,9,9,9],
            l2: [9,9,9,9]
        },
        expected: [8,9,9,9,0,0,0,1]
    }
];

const arrToList = (arr: number[]) => {
    if (arr.length === 0) return null;

    const [head, ...rest] = arr;
    let node = new ListNode(head);
    node.next = arrToList(rest);

    return node;
}

describe('--- Two Sum ---', () => {
    tests.map(({input, expected}, idx) => {
        it(`Returns [${expected}]`, () => {
            expect(addTwoNumbers(arrToList(input.l1), arrToList(input.l2))).toStrictEqual(arrToList(expected));
        });
    });
})