class Country {

    private truc : number[]

    constructor(public name: string = "", public flag: string = "", private _populationNb: number = 0) {
        this.truc = []
    }

    get populationNb(): number {
        return this._populationNb;
    }

    set populationNb(value: number) {
        this._populationNb = value;
    }

    public display(){
        console.log(`${this.name}, ${this.flag}, ${this._populationNb}`)
    }
}

let france : Country = new Country("France", "Bleu-Blanc-Rouge", 68_000_000)
france.display()
france.name = "Belgique"
france.populationNb = 11_000_000
france.display()

let country = new Country()












