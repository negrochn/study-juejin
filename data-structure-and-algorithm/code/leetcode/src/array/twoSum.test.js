import twoSum from './twoSum'

test('twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum([2, 7, 11, 15], 13)).toEqual([0, 2])
  expect(twoSum([2, 7, 11, 15], 17)).toEqual([0, 3])
  expect(twoSum([2, 7, 11, 15], 18)).toEqual([1, 2])
})