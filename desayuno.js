var requiteItem = require('./item');
const protoItem = requiteItem.singletonItem().get();


class Desayuno {
	constructor(coste) {
        this.mostrarItems = protoItem;
        this.coste = coste;
	}
	mostrarItems() {
		for (i = 0; i< protoItem.lenght; i++) {
			console.log(protoItem[i]);
		}
	}
	getCoste() {
		var precioTotal = 0.0;
		for (i = 0; i< protoItem.lenght; i++) {
			var precioTotal = precioTotal + protoItem[i];
		}
		return precioTotal;
	}
}

function singletonDesayuno() {
	var desayuno = new Desayuno();
	return {
		get: function() {
			return desayuno;
		}
	};
}

exports.singletonDesayuno = function() {
	return singletonDesayuno();
};
