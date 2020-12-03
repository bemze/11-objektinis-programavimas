import { Pets } from './Pets.js';

class Cat extends Pets {
    constructor(name, color, age, place, legs, voice) {
        super(name, color, age, place, legs)

        this.voice = 'Miau Miau';
    }
}

export { Cat }