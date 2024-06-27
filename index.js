const prompt = require("prompt-sync")();

//const triangulos = [];

while (true) {
  let lado1 = Number(
    prompt("Digite o comprimento do primeiro lado do triângulo: ")
  );
  let lado2 = Number(
    prompt("Digite o comprimento do segundo lado do triângulo: ")
  );
  let lado3 = Number(
    prompt("Digite o comprimento do terceiro lado do triângulo: ")
  );

  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
      console.log("O triângulo é equilátero!");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      console.log("O triângulo é isósceles!");
    } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
      console.log("O triângulo é escaleno!");
    } else {
      console.log("As medidas fornecidas não formam um triângulo!");
    }
  }
  let sair = prompt("Deseja sair? ")
  if (sair == "s" || sair == "sim") {
  break;
  }
}
