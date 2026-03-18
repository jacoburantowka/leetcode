import {twoSum} from "./twoSum";

const tests = [
    {
        input: {
            nums: [2,7,11,15],
            target: 9
        },
        expected: [0,1]
    },
    {
        input: {
            nums: [3,2,4],
            target: 6
        },
        expected: [1,2]
    },
    {
        input: {
            nums: [3,3],
            target: 6
        },
        expected: [0,1]
    }
]

describe('--- Two Sum ---', () => {
    tests.map(({input, expected}, idx) => {
        it(`Returns [${expected}] for nums [${input.nums}] and target ${input.target}`, () => {
            expect(twoSum(input.nums, input.target)).toStrictEqual(expected);
        })
    })
})