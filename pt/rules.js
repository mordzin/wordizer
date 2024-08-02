/*
    ----------------------------------------------------
    📄 PT-BR Rules
    To create new languages
    1. Create a lang folder, like en, pt, fr, etc
    2. Copy this file to new folder and Set language rules
    3. on index file, init inflactor with new Rules
*/

// ----------------------------------------------------
// 📄 Pluralization Rules

export const pluralizationRules = [
  [/(ão)$/i, '$1es'], // Ex: "cão" -> "cães"
  [/(r|z)$/i, '$1es'], // Ex: "flor" -> "flores", "arroz" -> "arrozes"
  [/(m)$/i, '$1ns'], // Ex: "homem" -> "homens"
  [/(l)$/i, '$1is'], // Ex: "animal" -> "animais"
  [/(s|x)$/i, '$1'], // Ex: "lápis" -> "lápis", "tórax" -> "tórax"
  [/([aeiou])$/i, '$1s'], // Ex: "banana" -> "bananas", "carro" -> "carros"
  [/ã$/i, 'ãs'], // Ex: "maçã" -> "maçãs"
  [/el$/i, 'eis'], // Ex: "carrossel" -> "carrosseis"
  [/il$/i, 'is'], // Ex: "fuzil" -> "fuzis"
  [/ul$/i, 'uis'], // Ex: "azul" -> "azuis"
  [/ol$/i, 'óis'], // Ex: "farol" -> "faróis"
  [/al$/i, 'ais'], // Ex: "animal" -> "animais"
]

// ----------------------------------------------------
// 📄 Singularization Rules

export const singularizationRules = [
  [/(ões|ães)$/i, 'ão'], // Ex: "cães" -> "cão"
  [/ais$/i, 'al'], // Ex: "animais" -> "animal"
  [/éis$/i, 'el'], // Ex: "carrosseis" -> "carrossel"
  [/óis$/i, 'ol'], // Ex: "faróis" -> "farol"
  [/is$/i, 'il'], // Ex: "fuzis" -> "fuzil"
  [/zes$/i, 'z'], // Ex: "arrozes" -> "arroz"
  [/(res|ses|les|nes)$/i, (match) => match.slice(0, -1)], // Ex: "flores" -> "flor"
  [/(ais|eis|óis)$/i, (match) => match.slice(0, -1)], // Ex: "animais" -> "animal"
  [/ns$/i, 'm'], // Ex: "homens" -> "homem"
  [/s$/i, ''], // Ex: "bananas" -> "banana"
  [/uis$/i, 'ul'], // Ex: "azuis" -> "azul"
]

// ----------------------------------------------------
// 📄 Uncountable Rules

export const uncountableRules = [
  /tórax/i,
  /lápis/i,
  /ônibus/i,
  /pólen/i,
  /vírus/i,
  /fênix/i,
]

// ----------------------------------------------------
// 📄 Irregular Rules

export const irregularRules = [
  ['cão', 'cães'],
  ['pão', 'pães'],
  ['mão', 'mãos'],
  ['alemão', 'alemães'],
  ['cidadão', 'cidadãos'],
  ['irmão', 'irmãos'],
  ['cristão', 'cristãos'],
  ['capitão', 'capitães'],
]
