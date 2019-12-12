function toCamelStyle(rowStr) {
  newStr = rowStr
    .replace(/^[A-Za-z0-9]|_[A-Za-z0-9]/g, function(matchedLetter, index) {
      if (index === 0) {
        return matchedLetter.toLowerCase();
      } else {
        return matchedLetter.toUpperCase();
      }
    })
    .replace(/_/g, "");
  if (rowStr.charAt(0) === "_") {
    newStr = "_" + newStr;
  }
  return newStr;
}

a = toCamelStyle("abc_bcd"); // 输出 'abcBcd'
b = toCamelStyle("a_3_c_d_ef"); // 输出 'a3CDEf'
c = toCamelStyle("_a_b_c_d_ef"); // 输出 '_aBCDEf'
d = toCamelStyle("Asdf_asdf");

console.log(a, b, c, d);
