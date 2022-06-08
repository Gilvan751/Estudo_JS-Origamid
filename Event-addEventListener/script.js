/* const img = document.querySelector('img');
img.addEventListener('click',  ()=> {
  console.log('Clicou imagem');
}); */
const img = document.querySelector('img');
function callback(event) {
  console.log(event);
}

/* img.addEventListener('click', callback); */

/* const imagens = document.querySelector('.animais-lista')
function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}

imagens.addEventListener('click', callbackLista); */

const linkExterno = document.querySelector('a[href^="http"]');
function handlLinkExterno(event) {
  event.preventDefault();
  /* console.log(event); */
  console.log(this);
  console.log(event.currentTarget);
}
linkExterno.addEventListener('click', handlLinkExterno);
