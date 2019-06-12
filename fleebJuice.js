class FleebJuice {
    constructor() {
        this.nombre = "Fleeb juice";
        this.pvp = 35.0;
    }
}

function singletonFleebJuice() {
	var fleebJuice = new FleebJuice();
	return {
		get: function() {
			return fleebJuice;
		}
	};
}

exports.singletonFleebJuice = function() {
	return singletonFleebJuice();
};
