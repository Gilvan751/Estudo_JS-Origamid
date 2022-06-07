const listaanimais = document.querySelector('.animais-lista');

const height = listaanimais.scrollHeight;
const animaisTop = listaanimais.offsetTop;
console.log(animaisTop);

const raposah2 = document.querySelector('h2');
const h2left = raposah2.offsetLeft;

const rect = raposah2.getBoundingClientRect();

console.log(rect.height);

console.log(
window.innerWidth, // width do janela
window.outerWidth, // soma dev tools também
window.innerHeight, // height do janela
window.outerHeight, // soma a barra de endereço

window.pageYOffset, // distância total do scroll vertical
window.pageXOffset // distância total do scroll horizontal


);
/* if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
} */


const small = window.matchMedia('(max-width: 600px)').matches;

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

  //DICA
/* Selecione o elemento no inspetor (dom)

Abra o console e digite $0 para selecionar o mesmo

Os elementos selecionados anteriormente são $1, $2 ...
 */