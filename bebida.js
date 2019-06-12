var requireFleebJuice = require('./fleebJuice');
var requireTurbulentJuice = require('./turbulentJuice');
var requirePacking = require('./packing');
const protoPacking = requirePacking.singletonPacking().get();
const protoFleebJuice = requireFleebJuice.singletonFleebJuice().get();
const protoTurbulentJuice = requireTurbulentJuice.singletonTurbulentJuice().get();

class Bebida {
    constructor() {
        this.empaquetado = protoPacking;
        this.toString = [protoFleebJuice, protoTurbulentJuice];

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
