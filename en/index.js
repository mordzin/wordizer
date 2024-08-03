import inflector from '../inflector.js'

import {
  pluralization,
  singularization,
  uncountable,
  irregular,
} from './rules.js'

export const pluralizeEn = inflector(pluralization, uncountable, irregular)
export const singularizeEn = inflector(singularization, uncountable, irregular)
