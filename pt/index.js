import inflector from '../inflector.js'

import {
  pluralization,
  singularization,
  uncountable,
  irregular,
} from './rules.js'

export const pluralizePt = inflector(pluralization, uncountable, irregular)
export const singularizePt = inflector(singularization, uncountable, irregular)
