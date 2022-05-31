/* function areaQuadrado(lado) {
    return lado * lado;
    
}
console.log(areaQuadrado(4)) */
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}
console.log(imc(80, 1.80));
console.log(imc(80, 1.70));


