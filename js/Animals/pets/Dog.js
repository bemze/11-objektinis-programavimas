import { Pets } from './Pets.js';

class Dog extends Pets {
    constructor(name, color, age, place, legs, voice) {
        super(name, color, age, place, legs)

        this.voice = 'Gaf Gaf';
        
    }
}

export { Dog }








// class Dog extends Pets {
//     constructor(vardas, spalva, amzius, namai, voice) {
//         super(vardas, spalva, amzius, namai)

//         this.voice = 'Gaf gaf';
//         console.log(voice);
//     }
// }

// export { Dog }