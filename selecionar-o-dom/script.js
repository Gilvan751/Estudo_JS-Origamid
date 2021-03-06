// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contatos = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);

const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

/* SELETOR GERAL LISTA
querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList */

const gridSections = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(gridSections[1]);


// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const figura = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(figura);

// Selecione todos os links internos (onde o href começa com #)
const link = document.querySelectorAll('[href^="#"]'); //o ^e essencial para pegar apenas todos que começas com #
console.log(link);

// Selecione o primeiro h2 dentro de .animais-descricao
const sub = document.querySelector('.animais-descricao h2');
console.log(sub);

// Selecione o último p do site
const ultimo = document.querySelectorAll('p');
console.log(ultimo[ultimo.length - 1]);//para acessa o ultimo podemos colocar tambem
// console.log(ultimo[--ultimo.length])



