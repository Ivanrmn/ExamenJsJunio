var requireBebida = require('./bebida');
var requireCereales = require('./cereales');
var requirePacking = require('./packing');
const protoPacking = requirePacking.singletonPacking().get();
const protoBebida = requireBebida.singletonBebida().get();
const protoCereales = requireCereales.singletonCereales().get();

class Item {
	constructor(nombre, empaquetado, pvp) {
        this.nombre = [protoBebida.toString, protoCereales.toString];
        this.empaquetado = protoBebida.empaquetado, protoCereales.empaquetado;
        this.pvp = [protoBebida.pvp, protoCereales.pvp];
	}
}

function singletonItem() {
	var item = new Item();
	return {
		get: function() {
			return item;
		}
	};
}

exports.singletonItem = function() {
	return singletonItem();
};

//console.log({protoBebida, protoCereales});
