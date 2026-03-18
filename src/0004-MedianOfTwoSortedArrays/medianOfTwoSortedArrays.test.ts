import { findMedianSortedArrays } from './medianOfTwoSortedArrays';

const tests = [
    {
        input: {
            nums1: [1, 3],
            nums2: [2]
        },
        expected: 2
    },
    {
        input: {
            nums1: [1, 2],
            nums2: [3, 4]
        },
        expected: 2.5
    },
    {
        input: {
            nums1: [0],
            nums2: [0, 0]
        },
        expected: 0
    },
];

describe('--- Median of Two Sorted Arrays ---', () => {
    tests.map(({input, expected}, idx) => {
        it(`Returns ${expected}`, () => {
            expect(findMedianSortedArrays(input.nums1, input.nums2)).toBe(expected);
        });
    });
})