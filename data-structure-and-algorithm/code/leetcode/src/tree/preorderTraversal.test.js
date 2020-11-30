import preorderTraversal from './preorderTraversal'
import Tree from './tree'

test('preorderTraversal', () => {
  expect(preorderTraversal(new Tree([1, null, 2, 3]))).toEqual([1, 2, 3])
  expect(preorderTraversal(new Tree([1, 2, 3, 4, 5, null, 6]))).toEqual([1, 2, 4, 5, 3, 6])
})