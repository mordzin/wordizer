# Wordizer

Wordizer is a library for pluralizing and singularizing words in both English and Portuguese. It supports dynamic word transformations based on language-specific rules.

## Installation

To install wordizer, use npm or yarn:

```bash
npm install wordizer
```

```bash
yarn add wordizer
```

## Usage

### Pluralizing and Singularizing Words

wordizer provides functions to pluralize and singularize words for supported languages. Here is an example of how to use wordizer with English and Portuguese:

```javascript
import { pluralize, singularize } from 'wordizer'

// English

const enWord = 'apple'
const enPlural = pluralize(word, 'en') // -> apples
const enSingular = singularize(enPlural, 'en') // -> apple

// Portuguese
const ptWord = 'maçã'
const ptPlural = pluralize(word, 'pt') // -> maçãs
const ptSingular = singularize(ptPlural, 'pt') // -> maçã
```

## Contributing

## Github Repository

[Wordizer on GitHub](https://github.com/mordzin/wordizer)

### Adding New Languages

To add a new language to wordizer, follow these steps:

1. Create a new directory for the language (e.g., `fr` for French) under the root directory.
2. Inside the new directory, create a `rules` directory and add the following files:
   - `irregular.js`
   - `pluralization.js`
   - `singularization.js`
   - `uncountable.js`
3. Populate these files with the appropriate rules for the new language.
4. Create `index.js` file in the new language directory.
5. Initialize the inflector with the rules in `index.js`:

```javascript
import inflector from '../inflector.js'

import {
  pluralizationRules,
  singularizationRules,
  uncountableRules,
  irregularRules,
} from './rules'

export const pluralize = inflector(
  pluralizationRules,
  uncountableRules,
  irregularRules
)
export const singularize = inflector(
  singularizationRules,
  uncountableRules,
  irregularRules
)
```

6. Update the main `index.js` file to include the new language:

```javascript
import { pluralize as enPluralize, singularize as enSingularize } from './en'
import { pluralize as ptPluralize, singularize as ptSingularize } from './pt'

// ----------------------------------------------------
// Import the new language

import { pluralize as frPluralize, singularize as frSingularize } from './fr'

// ----------------------------------------------------

export const wordizer = {
  en: {
    pluralize: enPluralize,
    singularize: enSingularize,
  },
  pt: {
    pluralize: ptPluralize,
    singularize: ptSingularize,
  },

  // -------------------------------------------------
  // Add the new language
  fr: {
    pluralize: frPluralize,
    singularize: frSingularize,
  },
  // -------------------------------------------------
}

export const pluralize = (word, lang) => {
  return wordizer[lang].pluralize(word)
}
export const singularize = (word, lang) => {
  return wordizer[lang].singularize(word)
}
```

### Running Tests

To run tests for both English and Portuguese, use the following command:

```bash
npm test
```

Here is an example of the test script (`wordizer.test.js`):

```javascript
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
```

## License

This project is licensed under the ISC License.

## Acknowledgements

This package is a fork of the Pluralize and PluralizePTBR libraries. I have refactored it to create wordizer, enhancing its functionality to support both English and Portuguese with a modular approach for easy addition of new languages.
