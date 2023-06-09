// ETAPA 1 - REQUERIR MODULO "autos" del archivo autos.js
var autos = require("./autos.js");
var clientes = require("./clientes.js");

// ETAPA 2 - FUNCIONALIDAD BUSCAR AUTO
let concesionario = {
    autos: autos,
    clientes: clientes,
    buscarAuto(laPatente){  
        for(var i=0;i<autos.length;i++){
            if(autos[i].patente == laPatente ){
              return autos[i];
            }
        }
        return null;
    },
    
    // ETAPA 3 - FUNCIONALIDAD VENDER AUTO
    venderAuto(laPatente){
        console.log ("vender auto patente : "+ laPatente);
         if(this.buscarAuto(laPatente)!= null){
            let index = autos.indexOf(this.buscarAuto(laPatente))
            autos[index].venta="Vendido";
         }
         return  this.buscarAuto(laPatente);
    },

    // ETAPA 4 - LISTA DE AUTOS PARA LA VENTA , FUNCIONALIDAD "autosParaLaVenta"
    autosParaLaVenta(){
       let listaDeAutosParaVenta = autos.filter(item=>item.venta == "En venta");
        return listaDeAutosParaVenta;
    },
    
   
    // ETAPA 5 - LISTA DE AUTOS VENDIDOS, DINERO GENERADO , FUNCIONALIDAD "ListaDeVentas"
    listaDeVentas(){
         let listaDeAutosVendidos = autos.filter(vendidos=>vendidos.venta == "Vendido");
         let listaPrecioVendidos = [];
       for (var  i=0; i<listaDeAutosVendidos.length;i++ ){
            listaPrecioVendidos.push(listaDeAutosVendidos[i].precio);
         }
        return listaPrecioVendidos;
    },

    // ETAPA 6 - TOTAL DE VENTAS,  , FUNCIONALIDAD "totalDeVentas"
    // uso metodos Filter y Reduce
    totalDeVentas(){
        let listaDeAutosVendidos = autos.filter(vendidos=>vendidos.venta == "Vendido");
        let montoVendido=0;
        montoVendido=listaDeAutosVendidos.reduce((total,item)=>{return total+item.precio;},0);
        return montoVendido;
    },
    // ETAPA 7 - desarrollar funcion "puedeComprar"
    /* Es por esto que María te pide que desarrolles la función "puedeComprar" que reciba por parámetro
     un auto y una persona y devuelva true si la misma puede comprar el auto.
    */
    listaPorVender(patenteAuto,persona){
        
        
        let listaDeAutosPorVender = autos.filter(vendidos=>vendidos.venta == "En venta");
        let autoBuscadoParaVenta = listaDeAutosPorVender.filter(laPatente=>laPatente.patente == (patenteAuto)||false);
        
        if(autoBuscadoParaVenta == false){
           //  console.log ("El auto NO está a la venta");
            return false;
            
        }else {
            // console.log ("el auto SI esta a la venta ");
            
        }

        let busquedaCliente = clientes.filter(nombreCliente=>nombreCliente.nombre == (persona)||false);
        if(busquedaCliente == false){
                // console.log ("Nombre del cliente no existe");
        return false;
        }else {
             // console.log ("Nombre del cliente existe ");
         }
              
        let capacidadDePagoTotal = busquedaCliente[0].capacidadDePagoTotal; 
         
        let capacidadPagoCuotas = busquedaCliente[0].capacidadDePagoEnCuotas;
         if(autoBuscadoParaVenta[0].precio<= capacidadDePagoTotal){
            
            if ((autoBuscadoParaVenta[0].precio/autoBuscadoParaVenta[0].cuotas)<=capacidadPagoCuotas){
                // console.log("aprobado cuotas");
                return true;
            }else {
                // console.log("no en cuotas");
                return false;
            };
            
            } else {
                // console.log("no en total")
                return false;
            };

        }
     
}

// console.log( concesionario.buscarAuto("JJK116")); // Etapa 2
// console.log( concesionario.venderAuto("JJK116")); // Etapa 3
// console.log( concesionario.autosParaLaVenta()); // Etapa 4
//console.log (concesionario.listaDeVentas()); // Etapa 5
// console.log (concesionario.totalDeVentas()); // Etapa 6
console.log(concesionario.listaPorVender("JJK116", "Ramon")); // Etapa 7
