class Smiggles {
    constructor() {
        this.nombre = "Smiggles";
        this.pvp = 50.0;
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
