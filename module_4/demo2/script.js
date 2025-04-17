var Country = /** @class */ (function () {
    function Country(name, flag, _populationNb) {
        if (name === void 0) { name = ""; }
        if (flag === void 0) { flag = ""; }
        if (_populationNb === void 0) { _populationNb = 0; }
        this.name = name;
        this.flag = flag;
        this._populationNb = _populationNb;
        this.truc = [];
    }
    Object.defineProperty(Country.prototype, "populationNb", {
        get: function () {
            return this._populationNb;
        },
        set: function (value) {
            this._populationNb = value;
        },
        enumerable: false,
        configurable: true
    });
    Country.prototype.display = function () {
        console.log("".concat(this.name, ", ").concat(this.flag, ", ").concat(this._populationNb));
    };
    return Country;
}());
var france = new Country("France", "Bleu-Blanc-Rouge", 68000000);
france.display();
france.name = "Belgique";
france.populationNb = 11000000;
france.display();
var country = new Country();
