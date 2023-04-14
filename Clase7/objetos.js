// Ejercicio utilizando los metodos de los objetos
//vamos a reforzar el concepto de un objeto literal tratando de representar
// un deportista y pedirle que entrene. Para este ejercicio contamos con un 
// objeto literal "deportista" ya definido, que tiene los siguientes atributos:
// nombre, energia experiencia.
// queremos  poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser 
// completar la funcion "entrenarHoras" que tiene las siguientes caracteristicas.
// 1) recibe por parametro la cantidad de horas
// 2) resta a su energia (this.energia) la cantidad de horas x 5.
// 3) Incrementa su experiencia (this.experiencia) la cantidad de horas x 2
// Una vez definida la funcion podemos ejecutar el codigo y ver como va variando 
// la energia y la experiencia del deportista por consola


let deportista = {
    nombre : "Nadal",
    energia : 100,
    experiencia : 100,
    entrenarHoras : function(entrenar ){
                    this.energia -= entrenar*5;
                    this.experiencia += entrenar*2;

    } 


}
console.log ( deportista.energia, deportista.experiencia);
deportista.entrenarHoras (5);
console.log ( deportista.energia, deportista.experiencia);
// ---------------------------------------
// Ejercicio; comparar dos numeros y definir cual es el mayor de ellos.
function compararNumeros(x,y){
            if(x>y){
                console.log( "El numero mayor es "+x+ " y el menor es: " + y);
            }
            else{
                console.log( "El numero mayor es "+y+ " y el menor es: " + x);

            };
};
compararNumeros(5,8); // informa: El numero mayor es 8 y el menor es: 5
// --------------------------------
// el mismo ejercicio en otra forma de informar
let mensaje = ""
function comparoNros (a,b){
    if(a>b){
        mensaje = "El mayor es el" + a;
    }
    else{
        mensaje = "El mayor es el " + b;

    };
    return mensaje
}
console.log (comparoNros(10,15));// informa:El mayor es el 15
//----------------------------

// definir la funcion positivo si en numero es positivo o negativo

/*7.- Positivo o Negativo
En este ejercicio nuestra tarea es completar la función positivo Esta función recibe 
un parámetro y devuelve un mensaje por consola determinando si el número es Positivo o Negativo.
*/

function nroPosNeg(nro){
    if(nro>=0){
        console.log ("El numero es positivo "+ nro);
    }
    else{
        console.log ("El numero es negativo "+ nro);
    }
}
nroPosNeg(-20);
console.log ("--------------------------------------------");
// 
// Ejercicio contar los impares que hay desde Cero hasta un numero dado.
 /* 4.- Contar impares
¡Vamos a crear una función interesante!
En este ejercicio nuestra tarea es completar la función no ParesDeContarImparesHasta.
 Esta función recibe un número X por parámetro y cuenta la cantidad de números impares 
 que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor.
  Para resolver la ejercitación debemos utilizar el for .
*/

function contarImpares(nroMaximo){
    let cantidadImpares=0;
    for(let i=1; i<=nroMaximo; i++){
        if((i % 2) != 0){
            cantidadImpares += 1;
            }
    }
    
    return cantidadImpares;
    
}
console.log("la cantidad de impares es: " + contarImpares(11));// informa: la cantidad de impares es: 6
console.log ("-------------------ARBOL UTOPICO-------------------------");
// -----------------------------------------------------------
/* 5.-Árbol utópico
Los árboles utópicos crecen de una forma particular, en dos ciclos:
Cada primavera duplican su tamaño
Cada verano crecen un metro
Si Laura planta un árbol utópico de un metro, al fin del otoño, ¿cuánto medirá de alto después de N ciclos?
Algunos ejemplos:
Si N = 0, su altura será 1 metro (no creció nada)
Si N = 1, su altura será de 2 metros (duplicó su altura en primavera)
Si N = 2, su altura será de 3 metros (creció un metro más en verano)
Si N = 3, su altura será de 6 metros (duplicó su altura en la siguiente primavera)
y así ...
*/
function arbolUtopico(ciclo){
    var crece = 1 ;
    
    for(var i=1; i<=ciclo; i++){
        
       if ((i % 2) == 0) {
        crece = crece +1;// ciclo verano
        
       }else if((i % 2) != 0){
        crece = crece*2;//ciclo primavera
       }
     }
        return crece;
    }

console.log("El arbol utopico tiene: "+ arbolUtopico(4)+ " metros.");// informa: El arbol utopico tiene: 6 metros.
console.log ("--------------------------------------------");
// -----------------------------------------------------------

/*6.- Promedio
En este ejercicio nuestra tarea es completar la función promedio Esta función recibe tres números por
 parámetro, los suma y al resultado lo divide por tres.
*/

function promedio(a,b,c){
    var suma = 0 ;
    var promedio = 0;
    suma = a + b + c;
    promedio = suma/3;
    return promedio;

}
console.log("El promedio de los tres valores es: "+ promedio(4,2,6));// informa: El promedio de los tres valores es: 4
console.log ("--------------------------------------------");
// -----------------------------------------------------------
/*7.- Positivo o Negativo
En este ejercicio nuestra tarea es completar la función positivo Esta función recibe un parámetro
 y devuelve un mensaje por consola determinando si el número es Positivo o Negativo.
*/

function positivoNro(n){
    
    var mensaje = "";
    if (n>0){
        mensaje = "POSITIVO";
    }else{
         mensaje = "NEGATIVO";
    }
    return mensaje
}
console.log(" El número ingresado  es " + positivoNro(-5));// Informa: El número ingresado  es NEGATIVO
console.log ("--------------------------------------------");
// -----------------------------------------------------------
