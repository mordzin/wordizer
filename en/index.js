import inflector from '../inflector.js'

import {
  pluralizationRules,
  singularizationRules,
  uncountableRules,
  irregularRules,
} from './rules/index.js'

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

export const en = { pluralize, singularize }

export const singularizeEn = singularize
export const pluralizeEn = pluralize
