import combine from './combine'

test('combine', () => {
  expect(combine(4, 2)).toEqual(expect.arrayContaining([[1, 4], [2, 4], [3, 4]]))
  expect(combine(4, 3)).toEqual(expect.arrayContaining([[1, 2, 4], [1, 3, 4], [2, 3, 4]]))
})