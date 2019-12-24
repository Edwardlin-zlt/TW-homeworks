// state: 0 All | 1 Active | 2 Complete
var state = 0;
var idCounter = 0;
var panel = document.getElementsByClassName("panel")[0]
var btnAdd = document.getElementById("btn-add");
var input = document.getElementById("input");
var filterAll = document.getElementById("all");
var filterActive = document.getElementById("active");
var filterComplete = document.getElementById("complete");

function main() {
  panel.addEventListener("click", e => {
    switch (e.target) {
      case btnAdd :
        saveItem();
        updateContainer();
      case filterAll:
        changeState(0);
        updateContainer();
      case filterActive(0):
        changeState(1);
        updateContainer();
      case filterComplete(0):
        changeState(2);
        updateContainer();
    }
  })
}

function saveItem() {
  
}

function updateContainer(params) {
  
}

function showTodos(todoArr) {

}

function changeState() {
  
}
