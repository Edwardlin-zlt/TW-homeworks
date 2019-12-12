var a = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// should output: 'a'

function findMaxFreqEle(arr) {
  if (!arr.length) return;
  var countDic = {};

  for (var i = 0, l = arr.length; i < l; i++) {
    if (!countDic[arr[i]]) {
      // 初始化某一项数组元素在对象中计数
      countDic[arr[i]] = 1;
    } else {
      countDic[arr[i]]++;
    }
  }

  // 找出频率最高的元素
  var keys = Object.keys(countDic);
  var maxNum = 0;
  var maxEle;
  for (var i = 0, l = keys.length; i < l; i++) {
    if (countDic[keys[i]] > maxNum) {
      maxEle = keys[i];
      maxNum = countDic[maxEle];
    }
  }
  return maxEle;
}

console.log(findMaxFreqEle(a));
