/*
    ----------------------------------------------------
    📄 pt-BR Rules

    To create new languages:

    1. Create a folder for the new language, such as en, pt, fr, etc.
    2. Copy this file to the new folder and set the language rules.
    3. In the index file, initialize the inflector with the new rules.
*/

// ----------------------------------------------------
// 📄 Pluralization Rules

export const pluralization = [
  [/(ão)$/i, 'ões'],
  [/(r|z)$/i, '$1es'],
  [/(m)$/i, 'ns'],
  [/(al)$/i, 'ais'],
  [/(el)$/i, 'eis'],
  [/(ol)$/i, 'óis'],
  [/(ul)$/i, 'uis'],
  [/(il)$/i, (match) => (match[0] === 'u' ? 'is' : 'eis')],
  [/([aeiou])$/i, '$1s'],
  [/s$/i, '$1'],
  [/x$/i, '$1'],
  [/ã$/i, 'ãs'],
]

// ----------------------------------------------------
// 📄 Singularization Rules

export const singularization = [
  [/(ões|ães)$/i, 'ão'],
  [/ais$/i, 'al'],
  [/éis$/i, 'el'],
  [/óis$/i, 'ol'],
  [/uis$/i, 'ul'],
  [/(eis)$/i, 'el'],
  [/is$/i, 'il'],
  [/zes$/i, 'z'],
  [/(res|ses|les|nes)$/i, (match) => match.slice(0, -1)],
  [/ns$/i, 'm'],
  [/s$/i, ''],
]

// ----------------------------------------------------
// 📄 Uncountable Rules

export const uncountable = [
  /tórax/i,
  /lápis/i,
  /ônibus/i,
  /pólen/i,
  /vírus/i,
  /fênix/i,
]

// ----------------------------------------------------
// 📄 Irregular Rules

export const irregular = [
  ['cão', 'cães'],
  ['pão', 'pães'],
  ['mão', 'mãos'],
  ['alemão', 'alemães'],
  ['cidadão', 'cidadãos'],
  ['irmão', 'irmãos'],
  ['cristão', 'cristãos'],
  ['capitão', 'capitães'],
]
