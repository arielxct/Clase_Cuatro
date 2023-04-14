// ETAPA 1 - REQUERIR MODULO "autos" del archivo autos.js
var autos = require("./autos.js");

// ETAPA 2 - FUNCIONALIDAD BUSCAR AUTO
let concesionario = {
    autos: autos,
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
    }
}
// console.log( concesionario.buscarAuto("JJK116")); // Etapa 2
// console.log( concesionario.venderAuto("JJK116")); // Etapa 3
// console.log( concesionario.autosParaLaVenta()); // Etapa 4
// console.log (concesionario.listaDeVentas()); // Etapa 5
console.log (concesionario.totalDeVentas()); // Etapa 6