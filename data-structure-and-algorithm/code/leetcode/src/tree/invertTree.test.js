import invertTree from './invertTree'
import Tree from './tree'

test('invertTree', () => {
  expect(invertTree(new Tree([4, 2, 7, 1, 3, 6, 9]))).toEqual(new Tree([4, 7, 2, 9, 6, 3, 1]))
})