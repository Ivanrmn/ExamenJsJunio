var requireSmiggles = require('./smiggles');
var requireEyeholes = require('./eyeholes');
const protoSmiggles = requireSmiggles.singletonSmiggles().get();
const protoEyeholes = requireEyeholes.singletonEyeholes().get();

class Cereales {
    constructor(nombre, pvp) {
        this.empaquetado = "Caja";
		this.toString = [nombre = protoSmiggles.nombre , pvp = protoSmiggles.pvp, nombre = protoEyeholes.nombre, pvp = protoEyeholes.pvp];
		this.pvp = [protoEyeholes.pvp, protoSmiggles.pvp];
    }
}

function singletonCereales() {
	var cereales = new Cereales();
	return {
		get: function() {
			return cereales;
		}
	};
}

exports.singletonCereales = function() {
	return singletonCereales();
};

//console.log({protoSmiggles, protoEyeholes});
//console.log(protoSmiggles.pvp + protoEyeholes.pvp);
