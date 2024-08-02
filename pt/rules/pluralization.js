/**
 * Portuguese pluralization rules.
 */

export const pluralizationRules = [
  [/(ão)$/i, '$1es'], // Ex: "cão" -> "cães"
  [/(r|z)$/i, '$1es'], // Ex: "flor" -> "flores", "arroz" -> "arrozes"
  [/(m)$/i, '$1ns'], // Ex: "homem" -> "homens"
  [/(l)$/i, '$1is'], // Ex: "animal" -> "animais"
  [/(s|x)$/i, '$1'], // Ex: "lápis" -> "lápis", "tórax" -> "tórax"
  [/([aeiou])$/i, '$1s'], // Ex: "banana" -> "bananas", "carro" -> "carros"
  [/ã$/i, 'ãs'], // Ex: "maçã" -> "maçãs"
]
