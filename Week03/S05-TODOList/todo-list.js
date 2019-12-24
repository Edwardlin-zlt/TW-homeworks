// state: 0 All | 1 Active | 2 Complete
var state = 0;
var panel = document.getElementsByClassName("panel")[0];
var todoContainer = document.getElementById("todo-container");
var btnAdd = document.getElementById("btn-add");
var input = document.getElementById("input");
var filterAll = document.getElementById("all");
var filterActive = document.getElementById("active");
var filterComplete = document.getElementById("complete");
var storage = localStorage;
var idCounter = localStorage.length;

main();

function main() {
  panel.addEventListener("click", e => {
    switch (true) {
      case e.target.id === "btn-add":
        saveItem();
        updateContainer();
        break;
      case e.target.id === "all":
        changeState(0);
        updateContainer();
        break;
      case e.target.id === "active":
        changeState(1);
        updateContainer();
        break;
      case e.target.id === "complete":
        changeState(2);
        updateContainer();
        break;
      case e.target.className === "checkbox":
        // change todoObj checked
      case e.target.className === "delete-todo":
        // delete todoObj isDeleted true
    }
  });
}

function saveItem() {
  // TODO `String.strip` in JS
  if (input.value) {
    todoData = {
      id: idCounter,
      content: input.value,
      isCompleted: false,
      isDeleted: false
    };
    storage.setItem(idCounter, JSON.stringify(todoData));
    idCounter++;
  }
}

function updateContainer(params) {
  var todoArr = [];
  for (var i = 0; i < storage.length; i++) {
    var key = storage.key(i);
    var todoObj = JSON.parse(storage.getItem(key));
    if (!todoObj.isDeleted) {
      todoArr.push(todoObj);
    }
  }

  switch (state) {
    case 0:
      var readyTodos = selectTodosAccordingState(todoArr, state);
      showTodos(readyTodos);
      break;
    case 1:
      var readyTodos = selectTodosAccordingState(todoArr, state);
      showTodos(readyTodos);
      break;
    case 2:
      var readyTodos = selectTodosAccordingState(todoArr, state);
      showTodos(readyTodos);
      break;
  }
}

function showTodos(readyTodos) {
  todoContainer.innerHTML = "";
  for (var i = 1; i <= readyTodos.length; i++) {
    createTodoRowEle(i, readyTodos[i - 1]);
  }
}

function createTodoRowEle(num, todoObj) {
  var todoRowEle = document.createElement("div");
  todoRowEle.classList.add("todo-row");
  var checkedStr = todoObj.isCompleted ? "checked" : "";
  var innerHTMLStr = `
    <span>${num}.</span>
    <div class="todo-content">
      <input
        type="checkbox" 
        class="checkbox" 
        name="todo-${todoObj.id}" 
        id="todo-${todoObj.id}" 
        ${checkedStr}
      />
      <label for="todo-${num}">${todoObj.content}</label>
    </div>
  `;
  todoRowEle.innerHTML = innerHTMLStr;
  todoContainer.appendChild(todoRowEle);
}

function selectTodosAccordingState(todoArr, state) {
  var tempArr = [];
  switch (state) {
    case 0:
      tempArr = todoArr;
      break;
    case 1:
      for (todoObj of todoArr) {
        if (!todoObj.isCompleted) {
          tempArr.push(todoObj);
        }
      }
      break;
    case 2:
      for (todoObj of todoArr) {
        if (todoObj.isCompleted) {
          tempArr.push(todoObj);
        }
      }
      break;
  }
  return tempArr.sort((a, b) => a.id - b.id);
}

function changeState(value) {
  window.state = value;
}

function checkTodo(todoRowEle) {}
