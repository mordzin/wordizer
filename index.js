import { pluralizeEn, singularizeEn } from './en/index.js'
import { pluralizePt, singularizePt } from './pt/index.js'

// ----------------------------------------------------
export const wordizer = {
  en: {
    pluralize: pluralizeEn,
    singularize: singularizeEn,
  },
  pt: {
    pluralize: pluralizePt,
    singularize: singularizePt,
  },
}

// ----------------------------------------------------

export const pluralize = (word, lang) => {
  return wordizer[lang].pluralize(word)
}

export const singularize = (word, lang) => {
  return wordizer[lang].singularize(word)
}

// ----------------------------------------------------

export { pluralizeEn, singularizeEn, pluralizePt, singularizePt }
