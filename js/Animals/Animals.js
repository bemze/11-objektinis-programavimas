

class Animals {
    constructor(name, color, age){
        this.name = name;
        this.color = color;
        this.age = age;
        
    }
    PetsIntroduce() {
        console.log(`Hi! mano vardas ${this.name}. Man yra ${this.age} metu. Esu ${this.color} spalvos.
        As gyvenu ${this.place} ir turiu ${this.legs} kojas. Ir as skleidziu garsa ${this.voice}`) }
    FishesIntroduce() {
        console.log(`Hi! mano vardas ${this.name}. Man yra ${this.age} metu. Esu ${this.color} spalvos.
        As gyvenu ${this.place}. Ir as neskleidziu ${this.voice}`)
    }
    BirdsIntroduce() {
        console.log(`Cip Cip! mano vardas ${this.name}. Man yra ${this.age} metai. Esu ${this.color} spalvos.
        As gyvenu ${this.place}. Ir as galiu ${this.sound}`)
    }
}

export { Animals }