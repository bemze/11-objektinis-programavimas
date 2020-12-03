import { Animals } from "../Animals.js";

class Fishes extends Animals {
    constructor(name, color, age, vandenyje) {
       super(name, color, age)
        this.place = vandenyje;
    }
}


export { Fishes }