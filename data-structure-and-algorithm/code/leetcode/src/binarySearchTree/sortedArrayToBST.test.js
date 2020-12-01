import sortedArrayToBST from './sortedArrayToBST'
import Tree from './tree'

test('sortedArrayToBST', () => {
  expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toEqual(new Tree([0, -3, 9, -10, null, 5, null]))
})