const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const taskElement = document.querySelector('#app #add-task');
const saveElement = document.querySelector('#app #options #save');
const deleteElement = document.querySelector('#app #options #delete');
const cancelElement = document.querySelector('#app #options #cancel');

const inputPomoElement = document.querySelector('#inputPomo');

const pomodoroElement = document.querySelector('#breaks #pomodoro');
const shortElement = document.querySelector('#breaks #short');
const longElement = document.querySelector('#breaks #long');
const startElement = document.querySelector('div.timer #start')


let todos = [];

function renderTodos() {
  listElement.innerHTML = '';

  for (todo of todos) {
    let todoElement = document.createElement('li');
    let todoText = document.createTextNode(todo);
    let icon = document.createElement('div');
    let inputPomo = document.createTextNode(todo);


    todoElement.appendChild(todoText);
    todoElement.appendChild(inputPomo);
    todoElement.appendChild(icon);
    listElement.appendChild(todoElement);
  }

  if (listElement.style.display === 'none') {
    listElement.style.display === 'block';
  }
}

function addTodo() {
  if (inputElement.value != '' && inputElement.value != null) {
    let todoText = inputElement.value;
    let pomoText= inputPomoElement.value;
    todos.push(todoText);
    todos.push(pomoText);
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

function startOrStop() {
  if (startElement.innerText == "START") startElement.innerText = "END";
  else startElement.innerText = "START";
}

// function pomoMode(mode) {
//   //todos tem a mesma cor de background, só escolher quem é none e qual que tem que ter a cor.

//   if (mode == pomodoro) {
//     pomodoroElement.style.backgroundColor = "#5554541a";
//     shortElement.style.backgroundColor = "none";
//     longElement.style.backgroundColor = "none;"

//     document.body.style.backgroundColor = '#ce092399';
//     document.querySelector('#clock li').innerText = '25:00';
//   } 
// }


//botão start ou stop
startElement.onclick = startOrStop;

// ok não rolou
// pomodoroElement.onclick = pomoMode(pomodoro);

//mudando a cor dos backgrounds
pomodoroElement.onclick = () => {
  document.body.style.backgroundColor = '#ce092399';
  document.querySelector('#start').style.color = '#ce092399';
  document.querySelector('#clock li').innerText = '25:00';

  pomodoroElement.style.backgroundColor = "#5554541a";
  shortElement.style.background = "none";
  longElement.style.background = "none";
}


shortElement.onclick = () => {
  document.body.style.backgroundColor = "#00746e99";
  document.querySelector('div.timer #start').style.color = '#00746e99';
  document.querySelector('#clock li').innerText = '05:00';

  longElement.style.background = "none";
  shortElement.style.backgroundColor = "#5554541a";
  pomodoroElement.style.background = "none";
}


longElement.onclick = () => {
  document.body.style.backgroundColor = "#11588899";
  document.querySelector('div.timer #start').style.color = '#11588899';
  document.querySelector('#clock li').innerText = '10:00';

  longElement.style.backgroundColor = "#5554541a";
  shortElement.style.background = "none";
  pomodoroElement.style.background = "none";
}

// funcionalidade do tasks
cancelElement.onclick = switchDivs;
taskElement.onclick = switchDivs;
saveElement.onclick = addTodo;
deleteElement.onclick = deleteTodo;