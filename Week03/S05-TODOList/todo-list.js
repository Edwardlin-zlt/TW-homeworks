// state: 0 All | 1 Active | 2 Complete
var state = 0;
var panel = document.getElementsByClassName("panel")[0];
var todoContainer = document.getElementById("todo-container");
var storage = localStorage;
var idCounter = localStorage.length;

main();

function main() {
  updateContainer();
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
        checkTodo(e.target);
        updateContainer();
        break;
      case e.target.className === "delete-todo":
        deleteTodo(e.target);
        updateContainer();
        break;
    }
  });
}

function saveItem() {
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
  input.value = "";
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
  var todoCompleted = todoObj.isCompleted ? "todo-complete" : "";
  var coloredStr = num % 2 == 0 ? "colored" : "";
  var innerHTMLStr = `
    <span class="${todoCompleted}">${num}.</span>
    <div class="todo-content ${coloredStr}">
      <input
        type="checkbox" 
        class="checkbox" 
        name="todo-${todoObj.id}" 
        id="todo-${todoObj.id}" 
        ${checkedStr}
      />
      <label for="todo-${todoObj.id}" class="${todoCompleted}">${todoObj.content}</label>
      <input type="button" id="${todoObj.id}"class="delete-todo" value="&#xe747;">
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

function checkTodo(checkboxEle) {
  var currentTodoEle = checkboxEle.parentNode.parentNode;
  // var numEle = currentTodoEle.getElementsByTagName("span")[0];
  // var contentEle = currentTodoEle.getElementsByTagName("label")[0];
  // if (checkboxEle.checked) {
  //   numEle.classList.add("todo-complete");
  //   contentEle.classList.add("todo-complete");
  // } else {
  //   numEle.classList.delete("todo-complete")
  //   contentEle.classList.delete("todo-complete");
  // }
  var delBtn = currentTodoEle.getElementsByClassName("delete-todo")[0];
  var todoObjId = parseInt(delBtn.id);
  var tempObj = JSON.parse(storage.getItem(todoObjId));
  if (checkboxEle.checked) {
    tempObj.isCompleted = true;
  } else {
    tempObj.isCompleted =false;
  }
  storage.setItem(todoObjId, JSON.stringify(tempObj));
}

function deleteTodo(deleteBtnEle) {
  var comfirmDel = confirm("Do you really want delete this TODO？");
  if (comfirmDel) {
    var todoObjId = parseInt(deleteBtnEle.id);
    var tempObj = JSON.parse(storage.getItem(todoObjId));
    tempObj.isDeleted = true;
    storage.setItem(todoObjId, JSON.stringify(tempObj));
  }
}
