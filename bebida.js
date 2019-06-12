var requireFleebJuice = require('./fleebJuice');
var requireTurbulentJuice = require('./turbulentJuice');
var requirePacking = require('./packing');
const protoPacking = requirePacking.singletonPacking().get();
const protoFleebJuice = requireFleebJuice.singletonFleebJuice().get();
const protoTurbulentJuice = requireTurbulentJuice.singletonTurbulentJuice().get();

class Bebida {
    constructor(nombre, pvp) {
		this.empaquetado = "Tubo";
		if (nombre == "FleebJuice") {}
        this.toString = [nombre = protoFleebJuice.nombre , pvp = protoFleebJuice.pvp] || [nombre = protoTurbulentJuice.nombre, pvp = protoTurbulentJuice.pvp];
    }
}

function singletonBebida() {
	var bebida = new Bebida();
	return {
		get: function() {
			return bebida;
		}
	};
}

exports.singletonBebida = function() {
	return singletonBebida();
};

//console.log([protoFleebJuice, protoTurbulentJuice]);
//console.log(protoFleebJuice.pvp + protoTurbulentJuice.pvp);
