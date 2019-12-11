var money = '￥20';

function getMoneyNum(strMoney) {
  var money = strMoney.match(/\d+/);
  return Number(money[0], 10);
}

console.log(getMoneyNum(money));