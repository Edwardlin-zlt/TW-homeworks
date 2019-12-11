function toCamelStyle(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {  // TODO function() 参数都是些什么

      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

console.log(toCamelStyle("EquipmentClass name"));
// console.log(camelize("Equipment className"));
// console.log(camelize("equipment class name"));
// console.log(camelize("Equipment Class Name")); // all output "equipmentClassName";

console.log(toCamelStyle('abc_bcd') );
console.log(toCamelStyle('a_3_c_d_ef'));
console.log(toCamelStyle('_a_b_c_d_ef'));