// o operador ternário serve para verificar uma cvondição  e depende da condição
// var nome = (condição) ? se for verdadeiro "escreve isso,pode ser colocado numero, string e qualquer tipo de " : senão "escreve isso";
// condição ? True : False
var idade = 25;
var possuDiabetes = true;
//var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
var podeBeber = (idade >= 18 && possuDiabetes) ? 'Pode beber': 'Não pode beber';
console.log(podeBeber)
// quando não e necessario abri e fechas chaves


var scrool = 1000;
scrool += 500;
console.log(scrool);

var possuiCarro = true;
var possuiCasa = true;
var darCredito;
darCredito = (possuiCarro && possuiCasa);
darCredito = (possuiCarro && possuiCasa) ? 'Dar credito' : 'Negar credito';
console.log(darCredito);