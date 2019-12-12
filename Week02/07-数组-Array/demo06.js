var a = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function findMaxFreqEle(arr) {
  var maxEle = arr[0];
  var maxNum = 1;

  var countDic = arr.reduce(function(tmpDic, curEle) {
    tmpDic[curEle] ? tmpDic[curEle]++ : (tmpDic[curEle] = 1);

    if (tmpDic[curEle] > maxNum) {
      maxNum = tmpDic[curEle];
      maxEle = curEle;
    }
    return tmpDic;
  }, {});
  return maxEle;
}

console.log(findMaxFreqEle(a));
