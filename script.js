// HTML

<input type="text" name="name" id="nome" class="popo"/>
<button class="botao">eae</button>


//02 html
<a href="Acessar meu log">eaeaeae</a>
// SCRIPT
let inputElement = document.querySelector("input [name=nome]");
let eae = document.querySelector('button.botao')


//02 script
// document.createElement  => cria uma espécie de elemento html
let linkELement = document.createElement('a');
// .setAttibute => adiciona parametros ao meu elemento criado
linkELement.setAttribute('href', 'https://eaeaea.com');

// .createTextNode cria um texto que pode ser depois associado a um elemento já criado.
let textLink = document.createTextNode('Acessar meu log');
// .appendChild associa um elemento a outro, deixando ele como elemento filho.
linkELement.appendChild(textLink);
