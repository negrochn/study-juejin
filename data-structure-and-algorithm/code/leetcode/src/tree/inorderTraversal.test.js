import inorderTraversal from './inorderTraversal'
import Tree from './tree'

test('inorderTraversal', () => {
  expect(inorderTraversal(new Tree([1, 2, 3, 4, 5, null, 6]))).toEqual([4, 2, 5, 1, 3, 6])
})