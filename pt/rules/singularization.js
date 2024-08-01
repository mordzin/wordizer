/**
 * Portuguese Singularization rules.
 */

export const singularizationRules = [
  [/(ões|ães)$/i, 'ão'],
  [/ais$/i, 'al'],
  [/éis$/i, 'el'],
  [/óis$/i, 'ol'],
  [/is$/i, 'il'],
  [/zes$/i, 'z'],
  [/(res|ses|les|nes|es)$/i, (match) => match.slice(0, -1)],
  [/(ais|eis|óis)$/i, (match) => match.slice(0, -1)],
  [/ns$/i, 'm'],
  [/s$/i, ''],
]
