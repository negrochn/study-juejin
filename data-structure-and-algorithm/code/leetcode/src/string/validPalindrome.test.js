import validPalindrome from './validPalindrome'

test('validPalindrome', () => {
  expect(validPalindrome('aba')).toBe(true)
  expect(validPalindrome('abca')).toBe(true)
  expect(validPalindrome('abcca')).toBe(true)
  expect(validPalindrome('abcaaca')).toBe(true)
  expect(validPalindrome('abcaabca')).toBe(false)
})