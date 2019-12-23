var itemRowsContainer = document.getElementById("item-rows-container");

function initPage() {
  loadItems(carProducts);
  window.itemRows = document.getElementsByClassName("item-row");
  window.selectAllBtn = document.getElementById("select-all");
  updateTotalPrice();

  document.addEventListener("click", e => {
    var btnClassName = e.target.className;
    switch (true) {
      case btnClassName.includes("minus-btn"):
        minusBtnAction(e);
        updateTotalPrice();
        break;
      case btnClassName.includes("add-btn"):
        addBtnAction(e);
        updateTotalPrice();
        break;
      case btnClassName.includes("checkbox"):
        ifAllSelected();
        updateTotalPrice();
        break;
      case e.target === selectAllBtn:
        toggleSelectAll(e);
        updateTotalPrice();
        break;
    }
  });
}

function loadItems(itemsInfo) {
  itemsInfo.forEach(itemInfo => {
    addItemToCart(itemInfo);
  });
}

function addItemToCart(itemInfo) {
  var cartRow = document.createElement("tr");
  cartRow.classList.add("item-row");
  cartRow.id = itemInfo.id;
  var isChecked = itemInfo.checked ? "checked" : "";
  var cartRowInnerHtml = `
    <td> 
      <input type="checkbox" name="checked" class="checkbox" ${isChecked} /> 
    </td> 
    <td class="item-name">${itemInfo.name}</td> 
    <td class="price">${itemInfo.price}</td> 
    <td class="count"> 
      <input type="button" class="btn minus-btn" value="-"> 
      <span class="item-count">${itemInfo.count}</span> 
      <input type="button" class="btn add-btn" value="+"> 
    </td> 
    <td class="item-total-price">${itemInfo.count * itemInfo.price}</td> 
  `;
  cartRow.innerHTML = cartRowInnerHtml;
  itemRowsContainer.appendChild(cartRow);
}

function updateItemTotalPrice(itemRow, itemQuantity) {
  var itemTotalPriceEle = itemRow.getElementsByClassName("item-total-price")[0];
  var priceEle = itemRow.getElementsByClassName("price")[0];
  var price = parseFloat(priceEle.innerHTML);
  itemTotalPriceEle.innerHTML = price * itemQuantity;
}

function updateTotalPrice() {
  var totalPriceEle = document.getElementById("total-price");
  var selectedItemCount = 0;
  var totalPrice = 0;

  // 类数组元素不能用forEach方法
  for (var i = 0; i < itemRows.length; i++) {
    var element = itemRows[i];
    if (element.getElementsByClassName("checkbox")[0].checked) {
      var itemCountEle = element.getElementsByClassName("item-count")[0];
      selectedItemCount += parseInt(itemCountEle.innerHTML);
      itemTotalPriceEle = element.getElementsByClassName("item-total-price")[0];
      itemTotalPrice = parseFloat(itemTotalPriceEle.innerHTML);
      totalPrice += itemTotalPrice;
    }
  }
  var innerHTML = `共计${selectedItemCount}件商品， ${totalPrice}￥`;
  totalPriceEle.innerHTML = innerHTML;
}

function addBtnAction(event) {
  var itemRow = event.target.parentNode.parentNode;
  var countEle = event.target.previousElementSibling;
  var countNum = parseInt(countEle.innerHTML);
  var newNum = countNum + 1;
  countEle.innerHTML = newNum;
  updateItemTotalPrice(itemRow, newNum);
}

function minusBtnAction(event) {
  var itemRow = event.target.parentNode.parentNode;
  var countEle = event.target.nextElementSibling;
  var countNum = parseInt(countEle.innerHTML);
  var newNum =
    countNum <= 1 ? itemRowsContainer.removeChild(itemRow) : countNum - 1;
  countEle.innerHTML = newNum;
  updateItemTotalPrice(itemRow, newNum);
}

function toggleSelectAll() {
  var isSelected = selectAllBtn.checked;
  for (var i = 0; i < itemRows.length; i++) {
    itemRows[i].getElementsByClassName("checkbox")[0].checked = isSelected;
  }
}

function ifAllSelected() {
  for (var i = 0; i < itemRows.length; i++) {
    if (itemRows[i].getElementsByClassName("checkbox")[0].checked === false) {
      selectAllBtn.checked = false;
      break;
    } else {
      selectAllBtn.checked = true;
    }
  }
}

var carProducts = [
  {
    id: 1,
    name: "英雄牌 钢笔",
    count: 1,
    price: 69,
    checked: false
  },
  {
    id: 2,
    name: "晨光牌 铅字笔",
    count: 2,
    price: 5.5,
    checked: true
  },
  {
    id: 3,
    name: "晨光牌 铅笔",
    count: 1,
    price: 2,
    checked: false
  },
  {
    id: 4,
    name: "狗熊牌 橡皮擦",
    count: 1,
    price: 1,
    checked: false
  },
  {
    id: 5,
    name: "瑞士牌 双肩书包",
    count: 1,
    price: 199,
    checked: true
  },
  {
    id: 6,
    name: "晨光牌 作业本",
    count: 5,
    price: 2.5,
    checked: false
  }
];

initPage();
