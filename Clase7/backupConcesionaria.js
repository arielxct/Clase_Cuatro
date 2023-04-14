// ETAPA 1 - REQUERIR MODULO "autos" del archivo autos.js
var autos = require("./autos.js");

console.log ("--------------------ETAPA 2-------------------------------");
// ETAPA 2 - FUNCIONALIDAD BUSCAR AUTO
function buscarAuto(laPatente){
    var autoEncontrado = "";
    var indiceAuto = 0;
    var cantidadAutos = autos.length;
     var i=0;
    
    for(var i=0;i<cantidadAutos;i++){
               
        if(laPatente == autos[i].Patente ){
        console.log("auto encontrado");
        console.log(autos[i]);
        var autoEncontrado = i;
       
        return autoEncontrado;
        }else {
        // console.log("no se encontro la patente");
        var autoEncontrado = autos.length+1;
       
    }
    
    }
    console.log ("fin de etapa 1 -------------------------");
    return autoEncontrado;
}
buscarAuto("APL123"); //Ford
// buscarAuto("xxx123");// Toyota JJK116
console.log ("--------------------ETAPA 3-------------------------------");

// ETAPA 3 - FUNCIONALIDAD VENDER AUTO

function venderAuto(laPatente){
    console.log ("vender auto patente Patente "+ laPatente);
   
   console.log(" voy a rutina buscarAuto----------------------");
    let estadoVenta = buscarAuto(laPatente);
    // console.log("estado venta: "+ estadoVenta);
    
    if(estadoVenta < autos.length){

        autos[estadoVenta].Venta = "Vendido";
       
        console.log("encontrado,vendido, true");
        console.log(autos[estadoVenta]);// informa que auto vendi y sus caracteristicas. 
    }else {
        console.log("no encontrado, no vendido");
        laPatente = "No existe";
        
    } 
       
    
    return laPatente;
}

console.log("Vender auto, patente: "+ venderAuto("JJK116")); // vendo auto patente JJK116
console.log ("--------------------ETAPA 4-------------------------------");

// ETAPA 4 - LISTA DE AUTOS PARA LA VENTA , FUNCIONALIDAD "autosParaLaVenta"
function autosParaLaVenta(disponible){
       
        let listaDeAutosParaVenta = autos.filter(item=>item.Venta == "En venta");
        console.log("Los autos a la venta son: ");
        console.log(listaDeAutosParaVenta);
    
}
autosParaLaVenta();
console.log ("-------------------------ETAPA 5--------------------------");

//----------------------------------------------------------------------
// ETAPA 5 - LISTA DE AUTOS VENDIDOS, DINERO GENERADO , FUNCIONALIDAD "ListaDeVentas"
// Uso metodo filter , tambien agregue las ganancias totales a este punto

function listaDeVentas(listado){
       
    let listaDeAutosVendidos = autos.filter(vendidos=>vendidos.Venta == "Vendido");
    console.log("Los autos vendidos son: ");
    console.log(listaDeAutosVendidos);
    var ganancia = 0;
    for (var  i=0; i<listaDeAutosVendidos.length;i++ ){
     console.log("_______________________________________________");
     console.log(" Modelo: " +listaDeAutosVendidos[i].Modelo+ "  Precio: " + listaDeAutosVendidos[i].Precio);
     console.log("_______________________________________________");
         
    }
    for (var  i=0; i<listaDeAutosVendidos.length;i++ ){
               
            ganancia = ganancia + (listaDeAutosVendidos[i].Precio);
                       
    }
    console.log("Las ganancias son de: $ "+ ganancia);

}
listaDeVentas();
console.log ("----------------------ETAPA 6-----------------------------");

//----------------------------------------------------------------------
// ETAPA 6 - TOTAL DE VENTAS,  , FUNCIONALIDAD "totalDeVentas"
// uso metodos Filter y Reduce


function totalDeVentas(totalVentas){
    let listaDeAutosVendidos = autos.filter(vendidos=>vendidos.Venta == "Vendido");
    let montoVendido=0;
     montoVendido=listaDeAutosVendidos.reduce((total,item)=>{return total+item.Precio;},0);
     console.log ("El monto total vendido es: " + montoVendido);
     
}
totalDeVentas();

//================================================================================
//========================================================================
// ETAPA 1 - REQUERIR MODULO "autos" del archivo autos.js
var autos = require("./autos.js");

// ETAPA 2 - FUNCIONALIDAD BUSCAR AUTO
let concesionario = {
    autos: autos,
    buscarAuto(laPatente){
        
    for(var i=0;i<autos.length;i++){
               
        if(autos[i].Patente == laPatente ){
               
        return autos[i];
        }
        
    
    }
    return null;
    
},
// console.log( concesionario.buscarAuto("JJK116"));
// ETAPA 3 - FUNCIONALIDAD VENDER AUTO

venderAuto(laPatente){
    console.log ("vender auto patente Patente "+ laPatente);
     
    
    if(this.buscarAuto(laPatente)!= null){
    let index = autos.indexOf(this.buscarAuto(laPatente))
       
        autos[index].Venta="Vendido";
        
    }
    
      return  this.buscarAuto(laPatente);
    
}
}
console.log( concesionario.venderAuto("JJK116")); // vendo auto patente JJK116


