class Plumbus {
    constructor() {
        this.nombre = "Plumbus";
        this.pvp = 100.0;
    }
}

function singletonPlumbus() {
	var plumbus = new Plumbus();
	return {
		get: function() {
			return plumbus;
		}
	};
}

exports.singletonPlumbus = function() {
	return singletonPlumbus();
};
