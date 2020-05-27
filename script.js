let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  //apaga tudo que já tinha dentro do list element que é o meu UL, apagando pra sempre começar zerado.
  listElement.innerHTML = '';

  for (todo of todos) {
    let todoElement = document.createElement('li');
    let todoText = document.createTextNode(todo);

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#')
    let linkText = document.createTextNode('Excluir');

    let pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ') ');

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  let todoText = inputElement.value;

  todos.push(todoText);
  //apagando o texto do meu input após adicionar o novo item
  inputElement.value = '';
  //atualizando a lista de todos
  renderTodos();
  saveToStorage()
}

renderTodos();

function deleteTodo(pos) {
  todos.splice(pos, 1)
  renderTodos();
  saveToStorage()
}

buttonElement.onclick = addTodo;
linkElement.onclick = removeTodo();



function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}