import isValidBST from './isValidBST'
import Tree from './tree'

test('isValidBST', () => {
  expect(isValidBST(new Tree([2, 1, 3]))).toBe(true)
  expect(isValidBST(new Tree([5, 1, 4, null, null, 3, 6]))).toBe(false)
})