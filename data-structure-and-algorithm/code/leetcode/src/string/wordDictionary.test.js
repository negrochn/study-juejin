import { WordDictionary } from './wordDictionary'

test('WordDictionary', () => {
  const wordDictionary = new WordDictionary()
  wordDictionary.addWord('bad')
  wordDictionary.addWord('dad')
  wordDictionary.addWord('mad')

  expect(wordDictionary.search('pad')).toBe(false)
  expect(wordDictionary.search('bad')).toBe(true)
  expect(wordDictionary.search('.ad')).toBe(true)
  expect(wordDictionary.search('b..')).toBe(true)
})