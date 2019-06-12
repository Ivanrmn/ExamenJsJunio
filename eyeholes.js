class Eyeholes {
    constructor() {
        this.nombre = "Eyeholes";
        this.pvp = 25.0;
    }
}

function singletonEyeholes() {
	var eyeholes = new Eyeholes();
	return {
		get: function() {
			return eyeholes;
		}
	};
}

exports.singletonEyeholes = function() {
	return singletonEyeholes();
};
