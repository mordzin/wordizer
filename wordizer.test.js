import { wordizer } from './index.js'

const testWords = {
  en: {
    singular: ['apple', 'banana', 'orange', 'strawberry', 'grape'],
    plural: ['apples', 'bananas', 'oranges', 'strawberries', 'grapes'],
  },
  pt: {
    singular: ['maçã', 'banana', 'laranja', 'morango', 'uva'],
    plural: ['maçãs', 'bananas', 'laranjas', 'morangos', 'uvas'],
  },
}

const runTests = (language, wordizer) => {
  const { singular, plural } = testWords[language]

  console.log(`\nTesting ${language.toUpperCase()} Pluralization:`)
  singular.forEach((word, index) => {
    const result = wordizer.pluralize(word)
    const expected = plural[index]
    const status = result === expected ? '🟢' : '🔴'
    console.log(`${status} ${word} -> ${result} (expected: ${expected})`)
  })

  console.log(`\nTesting ${language.toUpperCase()} Singularization:`)
  plural.forEach((word, index) => {
    const result = wordizer.singularize(word)
    const expected = singular[index]
    const status = result === expected ? '🟢' : '🔴'
    console.log(`${status} ${word} -> ${result} (expected: ${expected})`)
  })
}

runTests('en', wordizer.en)
runTests('pt', wordizer.pt)
