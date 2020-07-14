//
//Practica 4
//

const numero_secreto = 20;
let numero = parseFloat(prompt('Adivine un numero entre 1 y 100'));

while (numero != numero_secreto) {
    numero = parseFloat(prompt('Adivine un numero secreto'));
    if (numero > numero_secreto){
        console.log ('Su numero es mayor al numero establecido');
    }else if (numero < numero_secreto){
        console.log ('Su numero es menor al nuemro establecido')
    }     
}
console.log ('Adivinaste el numero, el numero es', numero_secreto);