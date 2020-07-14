//
//Practica 4
//

let año = parseFloat(prompt('Ingrese un año para saber si este es bisiesto o  no'));

if (año % 4 == 0 && año % 400 == 0 ){
    console.log ('Año bisiesto');
} else if (año % 100 !== 0 ){
    console.log ('No es año bisiesto');
}
