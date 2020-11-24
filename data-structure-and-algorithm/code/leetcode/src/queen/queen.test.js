import Queen from './queen'

test('Queen', () => {
  const queen = new Queen()
  queen.push(1)
  queen.push(2)
  queen.push(3)
  expect(queen.peek()).toBe(1)
  expect(queen.pop()).toBe(1)
  expect(queen.empty()).toBe(false)
  queen.push(4)
  queen.push(5)
  expect(queen.pop()).toBe(2)
  expect(queen.pop()).toBe(3)
  expect(queen.pop()).toBe(4)
  expect(queen.pop()).toBe(5)
  expect(queen.empty()).toBe(true)
})