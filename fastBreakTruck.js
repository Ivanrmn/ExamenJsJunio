var requireDesayuno = require('./desayuno');
const protoDesayuno = requireDesayuno.singletonDesayuno().get();
var requireItem = require('./item');
const protoItem = requireItem.singletonItem().get();

class FastBreakTruck {
	constructor() {
	}
	
}

var singletonDesayuno = require('./desayuno');

FastBreakTruck.prototype.prepararEyeHoles = function() {
    this.prepararEyeHoles = singletonDesayuno.singletonDesayuno().get();
    return Object.create(this.prepararEyeHoles);
};

FastBreakTruck.prototype.prepararSmiggles = function() {
    this.prepararSmiggles = singletonDesayuno.singletonDesayuno().get();
    return Object.create(this.prepararSmiggles);
};

FastBreakTruck.prototype.incluirJuguete = function(eyeDes) {
    this.incluirJuguete = singletonDesayuno.singletonDesayuno().get();
    return Object.create(this.incluirJuguete);
};

function singletonFastBreakTruck() {
	var fastBreakTruck = new FastBreakTruck();
	return {
		get: function() {
			return fastBreakTruck;
		}
	};
}

exports.singletonFastBreakTruck = function() {
	return singletonFastBreakTruck();
};
