let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let taskElement = document.querySelector('#app #add-task');
let saveElement = document.querySelector('#app #options #save');
let deleteElement = document.querySelector('#app #options #delete');
let cancelElement = document.querySelector('#app #options #cancel');

let todos = [];

function renderTodos(){
  listElement.innerHTML = '';

  for (todo of todos) {
    let todoElement = document.createElement('li');
    let todoText = document.createTextNode(todo);



    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
  }
}

function addTodo () {
  if (inputElement.value != '' && inputElement.value != null) {
    let todoText = inputElement.value;
    todos.push(todoText);
  } 

  inputElement.value = '';
  renderTodos();
}

function deleteTodo(item) {
  todos.splice(item, 1)
  renderTodos();
}

function switchDivs() {
    let e = document.querySelector('#app #tasks #add-task');
    let a = document.querySelector('#box');

    if (e.style.display === "none") {
      e.style.display = "block";
      a.style.display = "none";
    } else {
      e.style.display = "none";
      a.style.display = "block";
    }
}

// só serve quando já tiver todos salvo e armazenados.
// renderTodos();
cancelElement.onclick = switchDivs;
taskElement.onclick = switchDivs;
saveElement.onclick = addTodo;
deleteElement.onclick = deleteTodo;