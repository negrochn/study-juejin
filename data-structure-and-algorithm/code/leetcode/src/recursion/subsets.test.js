import subsets from './subsets'

test('subsets', () => {
  expect(subsets([1, 2, 3])).toEqual(expect.arrayContaining([[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]))
  expect(subsets([1, 2, 3])).toHaveLength(8)
})