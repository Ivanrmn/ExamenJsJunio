class Caja {
    constructor() {
        this.envoltorio = "Caja";
    }
}

function singletonCaja() {
	var caja = new Caja();
	return {
		get: function() {
			return caja;
		}
	};
}

exports.singletonCaja = function() {
	return singletonCaja();
};
