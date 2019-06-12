class Desayuno {
	constructor() {
        this.desayuno = new Desayuno;
        this.mostrarItems = '';
        this.coste = 0,0;
	}
	getCoste() {
		return this.coste;
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
