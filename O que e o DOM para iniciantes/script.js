// Crie uma função para verificar se um valor é Truthy

function verificar(valor) {    
    
    return !!valor;
};
console.log(verificar(12));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(l) {
    var p = 4 * l;
    return p;
};
console.log(perimetro(6));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `Seu nome completo é ${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Gilvan","Oliveira Silva"));

// Crie uma função que verifica se um número é par
var num ='' ;
function par(num) {
   
    if (num % 2 == 0) {
        return `O numero ${num} é par`;
    } else
    {
        return `O numero ${num} digitado e impar`;
        }
};
console.log(par(25));
console.log(par(12));
console.log(par(0));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(dado) {
    
    return typeof dado;
};
console.log(tipo(''));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('click', function () {
    console.log('Gilvan Oliveira Silva');

});
addEventListener('scroll', () => {
    console.log('Pedro jose');
});


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
