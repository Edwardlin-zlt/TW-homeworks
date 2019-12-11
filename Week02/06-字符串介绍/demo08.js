function firstToUpperCase(str) {
  words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(firstToUpperCase("me you him himself"));
