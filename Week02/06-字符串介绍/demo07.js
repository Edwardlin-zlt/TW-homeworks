function firstToUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}


var sentence = 'good afternoon, mr mike.';

console.log(firstToUpperCase(sentence));