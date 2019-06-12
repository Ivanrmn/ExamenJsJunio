/*var requireItem = require('./item');
const protoItem = requireItem.singletonItem().get();
*/
class TurbulentJuice {
	constructor() {
        this.nombre = 'Turbulent juuuuuice';
        this.pvp = 30.0;
	}
}

/*TurbulentJuice.prototype.prepararTurbulentJuice = function() {
    this.prepararTurbulentJuice = protoItem.singletonItem().get();
    return Object.create(this.prepararTurbulentJuice);
};*/

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

