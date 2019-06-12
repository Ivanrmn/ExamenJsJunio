class Smiggles {
    constructor() {
        this.nombre = "Eyeholes";
        this.pvp = 25.0;
    }
}

function singletonSmiggles() {
	var smiggles = new Smiggles();
	return {
		get: function() {
			return smiggles;
		}
	};
}

exports.singletonSmiggles = function() {
	return singletonSmiggles();
};
