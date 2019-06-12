class Tubo {
    constructor() {
        this.envoltorio = "Tubo";
    }
}

function singletonTubo() {
	var tubo = new Tubo();
	return {
		get: function() {
			return tubo;
		}
	};
}

exports.singletonTubo = function() {
	return singletonTubo();
};
