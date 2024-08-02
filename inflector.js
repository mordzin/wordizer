export default (rules, uncountableRules, irregularRules) => {
  return (word) => {
    const ruleSet = []
    const uncountables = {}
    const irregularPlurals = {}
    const irregularSingles = {}

    function sanitizeRule(rule) {
      if (typeof rule === 'string') {
        return new RegExp('^' + rule + '$', 'i')
      }
      return rule
    }

    function restoreCase(word, token) {
      if (word === token) return token
      if (word === word.toLowerCase()) return token.toLowerCase()
      if (word === word.toUpperCase()) return token.toUpperCase()
      if (word[0] === word[0].toUpperCase()) {
        return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase()
      }
      return token.toLowerCase()
    }

    function interpolate(str, args) {
      return str.replace(/\$(\d{1,2})/g, function (match, index) {
        return args[index] || ''
      })
    }

    function replace(word, rule) {
      return word.replace(rule[0], function (match, index) {
        var result = interpolate(rule[1], arguments)
        if (match === '') {
          return restoreCase(word[index - 1], result)
        }
        return restoreCase(match, result)
      })
    }

    function sanitizeWord(token, word, rules) {
      if (!token.length || uncountables.hasOwnProperty(token)) {
        return word
      }
      var len = rules.length
      while (len--) {
        var rule = rules[len]
        if (rule[0].test(word)) return replace(word, rule)
      }
      return word
    }

    function replaceWord(replaceMap, keepMap, rules) {
      return function (word) {
        var token = word.toLowerCase()
        if (keepMap.hasOwnProperty(token)) {
          return restoreCase(word, token)
        }
        if (replaceMap.hasOwnProperty(token)) {
          return restoreCase(word, replaceMap[token])
        }
        return sanitizeWord(token, word, rules)
      }
    }

    irregularRules.forEach(function (rule) {
      irregularSingles[rule[0].toLowerCase()] = rule[1].toLowerCase()
      irregularPlurals[rule[1].toLowerCase()] = rule[0].toLowerCase()
    })

    rules.forEach(function (rule) {
      ruleSet.push([sanitizeRule(rule[0]), rule[1]])
    })

    uncountableRules.forEach(function (word) {
      if (typeof word === 'string') {
        uncountables[word.toLowerCase()] = true
      } else {
        ruleSet.push([word, '$0'])
      }
    })

    return replaceWord(irregularSingles, irregularPlurals, ruleSet)(word)
  }
}
