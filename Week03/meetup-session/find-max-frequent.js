var targetData = [3, "a", "a", "a", 2, 3, "3", "3", "a", 3, "a", 2, 4, 9, 3];

var dic = {};
var maxNum = 0;

targetData.forEach(ele => {
  if (typeof ele === 'string') {
    ele = ele.charCodeAt()
  }
  dic[ele] ? dic[ele]++ : (dic[ele] = 1);

  if (dic[ele] > maxNum) {
    maxNum = dic[ele];
  }
});

var ret = {};

for (var key in dic) {
  ret[dic[key]] = key;
}

console.log(dic);
console.log(ret);
console.log(String.fromCharCode(ret[maxNum]));
