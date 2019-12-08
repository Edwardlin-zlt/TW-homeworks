var block = "";

for (var i = 1; i < 10; i++) {
  for (var j = 1; j <= i; j++) {
    block += i + "*" + j + "=" + i * j + " ";
    if (j === i) {
      block += "\n";
    }
  }
}

console.log(block);
