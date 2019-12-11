function toCamelStyle(rowStr) {
  if (rowStr.charAt(0) === "_") {
    tmpStr = rowStr.slice(1);
  } else {
    tmpStr = rowStr;
  }

  words = tmpStr.split("_");

  for (var i = 0; i < words.length; i++) {
    if (i === 0) {
      words[i] = words[i].toLowerCase();
    } else {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }

  if (rowStr.charAt(0) === "_") {
    words[0] = "_" + words[0];
  }
  return words.join("");
}

toCamelStyle("abc_bcd"); // 输出 'abcBcd'
toCamelStyle("a_3_c_d_ef"); // 输出 'a3CDEf'
toCamelStyle("_a_b_c_d_ef"); // 输出 '_aBCDEf'
