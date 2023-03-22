var numero = 10;
var nombre = "Ariel";
var ciudad = "Buenos Aires";
var provincia = "Rio Negro";
var barrio = "Palermo";
var rio = " Carapachay";
console.log (rio);
console.log (" archivo App.js");
// Metodo Require
const ariel=require("./archivo2"); // importo el array creado en ariel.js
console.log(ariel);// muestro el array completo
console.log("Naci en la ciudad de ", ariel[1]," ,vivo en el barrio de ", ariel[0]," y me gusta ", ariel[2]);//concateno el array