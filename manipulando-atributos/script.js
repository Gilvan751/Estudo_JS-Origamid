 function trocarImagem(filename, animalName) {
    document.querySelector('.imagem').setAttribute('src', 'imagens/' + filename);
    document.querySelector('.imagem').setAttribute('data-animal',  animalName);
}
function pegarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert(`Qual é o animal: ${animal}`);
} 
