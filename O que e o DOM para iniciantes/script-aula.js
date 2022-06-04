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

function retangulo(c,l) {
    a = c * l
    return a;
}
retangulo(6, 8);
function retangulos() {
    console.log('Funciton ativo: ')
}
retangulos();

function areQuadrado(lado) {
    return lado * lado;
}
console.log(areQuadrado(6));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total);

// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}
console.log(imc(99, 1.76));
console.log(imc(96, 1.76));

function corFavorita(cor) {
    if (cor == 'azul') {
        return 'Hoje esta um lindo céu azul';
    } else if (cor == 'verde') {
        return 'Hoje a grama esta mais verde';
    } else {
        return "Hoje esta um lindo dia branco";
    }
}
console.log(corFavorita('preto'));

addEventListener('click', function () {
    console.log('Clicou');
});


function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return 'Você faz parte do grupo da 3ª idade';
  } else {
    return 'Você não faz parte do grupo da 3ª idade';
  }
}
console.log(terceiraIdade(15));
console.log(terceiraIdade(75));
console.log(terceiraIdade('r'));
function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados} paises.`;
};
console.log(faltaVisitar(20));

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//console.log(outrosDados()); // retorna um erro


imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}
