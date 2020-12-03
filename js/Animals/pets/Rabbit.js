import { Pets } from './Pets.js';

class Rabbit extends Pets {
    constructor(name, color, age, place, legs, voice, habbit) {
        super(name, color, age, place, legs)
        this.voice = 'uhuh';
        this.habbit = "Daug grauziu morku"
        console.log(`As ${this.habbit}`)
    }
}

export { Rabbit }