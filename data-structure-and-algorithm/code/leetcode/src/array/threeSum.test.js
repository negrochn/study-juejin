import threeSum from './threeSum'

test('threeSum', () => {
  const expected = [[-1, 0, 1], [-1, -1, 2]]
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual(expect.arrayContaining(expected))
  expect(threeSum([-1, 0, 1, 1, 2, -1, -4])).toEqual(expect.arrayContaining(expected))
  expect(threeSum([-1, 0, 1, 1, 2, -1, -4]).length).toBe(2)
  
})