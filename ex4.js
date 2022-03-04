// [Dificil]: Hay un error en este bucle. Cambía SOLAMENTE una línea para conseguir que el bucle funcione. Debería aparecer un mensaje por consola: "arepa contiene la letra p". PISTA. Usa tantos console.log como necesites para saber qué pasa dentro del bucle. Pista: haz un console.log de palabraSecreta[i] al inicio del bucle.

let encontrado = false; // indica si ya hemos encontado la letraBuscada dentro de palabraSecreta
let letraBuscada = "p"; // letra que estamos buscando
let palabraSecreta = "arepa"; // palabra secreta
let i = 0; // iterador, índice que nos ayuda a recorrer la palabra

// Voy a recorrer 'palabraSecreta' , letra a letra
// Voy a ver si cada letra es igual a 'letraBuscada'
// Si encuentro una letra que es la misma que 'letraBuscada' puedo decir que dicha letra se encuentra en 'palabraSecreta'

while (i < palabraSecreta.length) {
    let siguienteLetra = palabraSecreta[i];
    console.log(siguienteLetra);
    i++;
}

if (encontrado) {
    console.log(`${palabraSecreta} contiene la letra ${letraBuscada}`);
}

else {
    console.log(`${palabraSecreta} NO contiene la letra ${letraBuscada}`);
}