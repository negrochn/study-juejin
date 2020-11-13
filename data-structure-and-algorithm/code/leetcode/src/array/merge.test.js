import merge from './merge'

test('merge', () => {
  expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6])
  expect(merge([3, 5, 6, 0, 0, 0], 3, [1, 2, 4], 3)).toEqual([1, 2, 3, 4, 5, 6])
})