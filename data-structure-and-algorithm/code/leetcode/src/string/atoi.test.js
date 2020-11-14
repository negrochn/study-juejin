import atoi from './atoi'

test('atoi', () => {
  expect(atoi('42')).toBe(42)
  expect(atoi('-42')).toBe(-42)
  expect(atoi('-w')).toBe(0)
  expect(atoi('4193 with words')).toBe(4193)
  expect(atoi('words and 987')).toBe(0)
  expect(atoi('-91283472332')).toBe(-2147483648)
})