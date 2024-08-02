import inflector from '../inflector.js'

import {
  pluralizationRules,
  singularizationRules,
  uncountableRules,
  irregularRules,
} from './rules.js'

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

export const pt = { pluralize, singularize }

export const singularizePt = singularize
export const pluralizePt = pluralize
