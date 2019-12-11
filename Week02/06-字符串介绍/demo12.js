function toCamelStyle(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(...args) {
    // TODO function() 参数都是些什么
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