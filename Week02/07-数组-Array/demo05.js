var a = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// should output: 'a'

function findMaxFreqEle(arr) {
  var maxEle = null;
  var maxNum = 0;
  var countDic = {};

  for (ele of arr) {
    countDic[ele] ? countDic[ele]++ : (countDic[ele] = 1);
    if (countDic[ele] > maxNum) {
      maxEle = ele;
      maxNum = countDic[ele];
    }
  }
  return maxEle;
}

console.log(findMaxFreqEle(a));
