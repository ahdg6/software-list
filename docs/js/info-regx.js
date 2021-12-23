/* eslint-disable camelcase */
const reletype = {
  'OS': '<i class="fab fa-osi"></i>开源_green',
  'FREE': '☘️免费_green',
  'CS': '⭕闭源_red',
  'PREM': '💸付费_red',
  'HOST': '✨自托管_blue',
}

const Action = {
  'GC': '/github/last-commit/',
  'GS': '/github/stars/',
}

const Word = {
  'Commit': '最近更新',
}
/* eslint-enable camelcase */

// Emoji from GitHub API
// https://api.github.com/emojis
// a0 action a1 author a2 repo a3 label a4 logo
window.emojify = function(match, $1) {
  if (reletype.hasOwnProperty($1)) {
    return '<font color="' + reletype[$1].split('_')[1] + '">' + reletype[$1].split('_')[0] + '</font>'
  }
  let a = $1.split('_')
  if (Action.hasOwnProperty(a[0])) {
    return '<img src="https://img.shields.io' +
         Action[a[0]] + a[1].replace('010', '-') + '/' + a[2].replace('010', '-') + '?label='
         + (Word.hasOwnProperty(a[3]) !== false ? Word[a[3]] : a[3])
         + '&logo=' + a[4] + '&style=flat-square" />'
        ;
  }
  return match
}
