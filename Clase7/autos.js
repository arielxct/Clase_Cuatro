// LISTA DE TODOS LOS AUTOS DE LA CONCESIONARIA.
/* Uso un Array "autos", y dentro del el creo tantos objetos como autos tenga la concesionaria. 
Puse 4 autos, tres "en venta" y dos "vendidos", para ampliar los ejemplos*/

var autos = [
    {
        marca : "Ford",
        modelo: "Fiesta",
        color: "Azul",
        año : "2019",
        kilometraje: "200",
        precio: 80000,
        cuotas: 12,
        patente:"APL123",
        venta:"En venta",
        },
    {
        marca : "Toyota",
        modelo: "Corola",
        color: "Blanco",
        año : "2019",
        kilometraje: "0",
        precio: 100000,
        cuotas: 14,
        patente:"JJK116",
        venta:"En venta" ,
    },
    {
        marca : "Fiat",
        modelo: "Palio",
        color: "Gris",
        año : "2015",
        kilometraje: "60000",
        precio: 80000,
        cuotas: 12,
        patente:"MNO215",
        venta:"Vendido" ,
    },
    {
        marca : "Chevrolet",
        modelo: "Corsa",
        color: "Azul",
        año : "2011",
        kilometraje: "12000",
        precio: 75000,
        cuotas: 14,
        patente:"DVS654",
        venta:"Vendido" ,
    },
    {
        marca : "Audi",
        modelo: "C3",
        color: "Plateado",
        año : "2018",
        kilometraje: "45000",
        precio: 250000,
        cuotas: 12,
        patente:"AUD123",
        venta:"En venta" ,
    },

]

module.exports = autos;