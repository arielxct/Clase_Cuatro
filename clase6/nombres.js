 
let clave=""
function puedePasar(nombre){
if(nombre == "Pedro"){
    return clave = "El nombre correcto es Pedro"
}else if(nombre == "Carlos"){
    return clave = "El nombre correcto es Carlos"
}else if(nombre == "Maria"){
    return clave = "El nombre correcto es Maria"
}else if(nombre == "Ana"){
    return clave = "El nombre correcto es Ana"
}else{
    return  clave ="No hay nombres correctos"
};
// console.log(clave);
}

console.log (puedePasar("Humberto"));// informa:No hay nombres correctos
console.log (puedePasar("Maria"));// informa: El nombre correcto es Maria

// Consigna del ejercicio
// Escribir las tres siguientes funciones. 
// Funcion "anterior", recibe un numero de parametro y devuelve ese numero menos uno
// Funcion "triple", recibe un numero como parametro y devuelve el triple de ese numero
// Funcion "anteriorDelTriple", recibe un numero como parametro, y utilizandolas las dos funciones anteriores, tendra
// que devolver el numero recibido multiplicado por tres (segunda funcion) y al resultado restarle 1 (uno) (primera funcion).

function anterior(numero){
    return numero-1
};
function triple(numero){
    return numero*3
};
function anteriorDelTriple(numero){
    let resultadoTriple = triple(numero);
    let resultadoFinal = anterior(resultadoTriple);
    return resultadoFinal;
};
console.log (anteriorDelTriple(3));// informa : 8
