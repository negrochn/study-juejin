import postorderTraversal from './postorderTraversal'
import Tree from './tree'

test('postorderTraversal', () => {
  expect(postorderTraversal(new Tree([1, null, 2, 3]))).toEqual([3, 2, 1])
  expect(postorderTraversal(new Tree([1, 2, 3, 4, 5, null, 6]))).toEqual([4, 5, 2, 6, 3, 1])
})