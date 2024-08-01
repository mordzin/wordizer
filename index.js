import {
  pluralize as enPluralize,
  singularize as enSingularize,
} from './en/index.js'

import {
  pluralize as ptPluralize,
  singularize as ptSingularize,
} from './pt/index.js'

export const wordizer = {
  en: {
    pluralize: enPluralize,
    singularize: enSingularize,
  },
  pt: {
    pluralize: ptPluralize,
    singularize: ptSingularize,
  },
}

export const pluralize = (word, lang) => {
  return wordizer[lang].pluralize(word)
}
export const singularize = (word, lang) => {
  return wordizer[lang].singularize(word)
}

export { enPluralize, enSingularize, ptPluralize, ptSingularize }
