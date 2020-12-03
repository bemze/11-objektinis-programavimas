import { Fishes } from './Fishes.js';

class Nemo extends Fishes {
    constructor(name, color, age, vandenyje, voice) {
        super(name, color, age, vandenyje)

        this.voice = 'jokio garso';
        
    }
}

export { Nemo }