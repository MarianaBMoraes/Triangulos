const prompt = require('prompt-sync')();

const triangulos = [];

while(true) {
    let a = +prompt('Lado A: ')
    let b = +prompt ('Lado B: ')
    let c = +prompt ('Lado C: ')
    let tipo = "";
    if(a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b) {
        if (a == b && b == c) {
            tipo = "Equilátero"
        }
        else if (a == b || b == c || a == c) {
            tipo = "Isósceles"
        }
        else {
            tipo = "Escaleno"
        }

        triangulos.push({a,b,c,tipo})
    }
    else {
       console.log("Não é um triângulo") 
    }
    console.log (triangulos);

    let sair = prompt ("Deseja sair? ");
    if (sair == "sim" || sair == "s") {
        break;
    }
}
