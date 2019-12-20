var itemRows = document.getElementById("item-rows");

function loadItems(itemsInfo) {
  itemsInfo.forEach(itemInfo => {
    addItemToCart(itemInfo)
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
      <input type="button" class="btn" id="minus-btn" value="-"> 
      <span>${itemInfo.count}</span> 
      <input type="button" class="btn" id="add-btn" value="+"> 
    </td> 
    <td class="item-total-price">0</td> 
  `;
  cartRow.innerHTML = cartRowInnerHtml;
  itemRows.append(cartRow);
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

loadItems(carProducts);

document.addEventListener("click", e => {
  switch (true){
    case (e.target.id === "minus-btn"):
      // parentNode - 1
      // make sure number legible
      // update item-total-price
      console.log(e.target.parentNode);
      console.log("minus pressed");
    case (e.target.id === "add-btn"):
      // parentNode + 1
      // make sure number legible
      // update item-total-price
      console.log(e.target.parentNode);
      console.log("minus pressed");
    case (e.target.classList[0] === "checkbox"):
      console.log(e.target);
      // update total price
  }

})