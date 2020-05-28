const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const taskElement = document.querySelector('#app #add-task');
const saveElement = document.querySelector('#app #options #save');
const deleteElement = document.querySelector('#app #options #delete');
const cancelElement = document.querySelector('#app #options #cancel');

const pomodoroElement = document.querySelector('#breaks #pomodoro');
const shortElement = document.querySelector('#breaks #short');
const longElement = document.querySelector('#breaks #long');
const startElement = document.querySelector('div.timer #start')


let todos = [];

function renderTodos(){
  listElement.innerHTML = '';

  for (todo of todos) {
    let todoElement = document.createElement('li');
    let todoText = document.createTextNode(todo);
    let icon = document.createElement('div');   

    todoElement.appendChild(todoText);
    todoElement.appendChild(icon);
    listElement.appendChild(todoElement);
  }

  if (listElement.style.display === 'none') {
    listElement.style.display === 'block';
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

function changeBcColor(color) {
  let liBackground = document.querySelector('div.timer #breaks li');
  document.body.style.backgroundColor = "color";
  liBackground.style.backgroundColor = "#5554541a"
}

function startOrStop(){
  if (startElement.innerText == "START") startElement.innerText = "END";
  else startElement.innerText = "START";
}

// só serve quando já tiver todos salvo e armazenados.
// renderTodos();

//botão start ou stop
startElement.onclick = startOrStop;

//mudando a cor dos backgrounds
pomodoroElement.onclick = () => document.body.style.backgroundColor = "#ce092399";;
longElement.onclick = () => document.body.style.backgroundColor = "#11588899";
shortElement.onclick = () => document.body.style.backgroundColor = "#00746e99";

// funcionalidade do tasks
cancelElement.onclick = switchDivs;
taskElement.onclick = switchDivs;
saveElement.onclick = addTodo;
deleteElement.onclick = deleteTodo;