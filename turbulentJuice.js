class TurbulentJuice {
	constructor() {
        this.nombre = 'Turbulent juuuuuice';
        this.pvp = 30.0;
	}
}

function singletonTurbulentJuice() {
	var turbulentJuice = new TurbulentJuice();
	return {
		get: function() {
			return turbulentJuice;
		}
	};
}

exports.singletonTurbulentJuice = function() {
	return singletonTurbulentJuice();
};
