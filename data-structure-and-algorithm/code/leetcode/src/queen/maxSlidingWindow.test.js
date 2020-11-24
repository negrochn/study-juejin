import maxSlidingWindow from './maxSlidingWindow'

test('maxSlidingWindow', () => {
  expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7])
  expect(maxSlidingWindow([1, 1, 1, 2, 2, 2, 3, 3, 3], 3)).toEqual([1, 2, 2, 2, 3, 3, 3])
  expect(maxSlidingWindow([3, 3, 3, 2, 2, 2, 1, 1, 1], 3)).toEqual([3, 3, 3, 2, 2, 2, 1])
})