var requireCaja = require('./caja');
var requireTubo = require('./tubo');
const protoCaja = requireCaja.singletonCaja().get();
const protoTubo = requireTubo.singletonTubo().get();

class Packing {
    constructor() {
        this.envoltorio = [protoCaja, protoTubo];
    }
}

function singletonPacking() {
	var packing = new Packing();
	return {
		get: function() {
			return packing;
		}
	};
}

exports.singletonPacking = function() {
	return singletonPacking();
};

// console.log(this.envoltorio = [protoCaja, protoTubo]);