/* window.alert('Bom dia');
alert('Tdo certo'); */
/* const href = window.location.href;
console.log(href);
if (href === 'http://127.0.0.1:5500/') {
    console.log('O valor é igual'); */
/* } */

const h1Selecionado = document.querySelector('h1');
console.log(h1Selecionado);
/* h1Selecionado.innerText; */

h1Selecionado.addEventListener('click', function () {
    console.log('Clicou em ', h1Selecionado);
}) 

function callbackh1() {
    console.log('Clicou em ', h1Selecionado.innerText)
}
h1Selecionado.addEventListener('click', callbackh1);

/* const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
console.log(titulo);
titulo.classList; // retorna as classes;
console.log(titulo);
titulo.id; // retorna o id;
console.log(titulo);
titulo.offsetHeight; // retorna a altura do elemento;
console.log(titulo); */

//titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo


// Retorne o url da página atual utilizando o objeto window
const local = window.location.href;
console.log(local);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const at = document.querySelector('.ativo');
console.log(at);

// Retorne a linguagem do navegador
const lingua = window.navigator.language;
console.log(lingua);

// Retorne a largura da janela 
const largura = window.innerWidth;
console.log(largura);
const altura = window.innerHeight;
console.log(altura);

const scrool = window.scroll.length;
console.log(scrool);

const tela = window.screen.width;
console.log(tela);
const animacao = window.Animation.length;
console.log(animacao);


const teste = document.querySelectorAll('p');
console.log(teste[--teste.length])