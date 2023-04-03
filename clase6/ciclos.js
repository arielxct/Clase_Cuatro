// Ejercicio: SUMATORIA DE BAJO IMPORTE
// escribir la funcion sumatoriaBajoImporte, la cual recibiendo un arreay con importes nos
 // devuelve el resultado final de la suma de los importes de todos los meses que tienen ganancia,
 // a excepcion de los que superen un importe de $1000. 

var suma = 0;

function sumatoriaBajoImporte(importeArray){
    for (let index = 0; index <= importeArray.length; index++) {
        if (importeArray[index]>0 && importeArray[index]<1000) {
             suma  = suma + importeArray[index];  
        }
        else {
            // estos valores no ingresan en la suma
        }
        
        
    }
    return suma;
}

console.log (sumatoriaBajoImporte([20,30,80,200,1200,-80, 2000,-30] ));
