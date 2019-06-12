/**
* Desayuno Eyeholes
*/

//Desayuno eyeDes = FastBreakTruck.prepararEyeHoles();

var requireFleebJuice = require('./fleebJuice');
var requireTurbulentJuice = require('./turbulentJuice');
var requireEyeholes = require('./eyeholes');
var requireSmiggles = require('./smiggles');
var requireDesayuno = require('./desayuno');
const protoDesayuno = requireDesayuno.singletonDesayuno().get();
const protoEyeholes = requireEyeholes.singletonEyeholes().get();
const protoSmiggles = requireSmiggles.singletonSmiggles().get();
const protoFleebJuice = requireFleebJuice.singletonFleebJuice().get();
const protoTurbulentJuice = requireTurbulentJuice.singletonTurbulentJuice().get();

console.log("\nNo abras la caja de Eyeholes!");
console.log(protoDesayuno);
console.assert((protoEyeholes.pvp + protoTurbulentJuice.pvp) == 55);
console.log("Precio pedido: " + (protoEyeholes.pvp + protoTurbulentJuice.pvp));

/**
* Desayuno Smiggles
*/
		
//Desayuno smigDes = FastBreakTruck.prepararSmiggles();
console.log("\nSmiggles per als nins!");
console.log(protoDesayuno);
console.assert((protoSmiggles.pvp + protoFleebJuice.pvp) == 85);
console.log("Precio pedido: " + (protoSmiggles.pvp + protoFleebJuice.pvp));

/**
* Plumbus
*/

//eyeDes = FastBreakTruck.prepararEyeHoles();
//FastBreakTruck.incluirJuguete(eyeDes);
console.log("\nEyeholes con plumbus!");
//eyeDes.mostrarItems();
//console.log("Precio pedido: " + eyeDes.getCoste());