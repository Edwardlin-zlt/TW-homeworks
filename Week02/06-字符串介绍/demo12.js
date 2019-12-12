function toCamelStyle(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(...args) {
    // function 的参数依次为 匹配到的内容， index， 整个匹配的内容
    console.log('\n--- newRound ---\n')
    for (arg of args) {
      var before = typeof arg;
      console.log(before + ' | ' + arg);
    }

    console.log("--- split ---")
    for (arg of arguments) {
      var before = typeof arg;
      console.log(before + ' | ' + arg);
    }
  });
}

toCamelStyle("EquipmentClass name")