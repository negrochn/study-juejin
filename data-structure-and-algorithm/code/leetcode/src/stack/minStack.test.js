import MinStack from './minStack'

test('MinStack', () => {
  const minStack = new MinStack()
  minStack.push(-2)
  minStack.push(0)
  minStack.push(-3)
  expect(minStack.getMin()).toBe(-3)
  minStack.pop()
  expect(minStack.getMin()).toBe(-2)
})