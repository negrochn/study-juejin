import levelOrder from './levelOrder'
import Tree from './tree'

test('levelOrder', () => {
  expect(levelOrder(new Tree([3, 9, 20, null, null, 15, 7]))).toEqual(expect.arrayContaining([[3], [9, 20], [15, 7]]))
  expect(levelOrder(new Tree([3, 9, 20, null, null, 15, 7]))).toHaveLength(3)
})