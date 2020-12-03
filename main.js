
import { Cat } from "./js/Animals/pets/Cat.js";
import { Dog } from "./js/Animals/pets/Dog.js";
import { Rabbit } from "./js/Animals/pets/Rabbit.js";
import { Nemo } from './js/Animals/fishes/Nemo.js'; 
import { Parrot } from './js/Animals/birds/Parrot.js';

const rikis = new Dog ("Rikis", "rudos", "10", "namuose");
rikis.PetsIntroduce();

const murkis = new Cat ("Murkis", "oranzines", "2", "namuose");
murkis.PetsIntroduce();

const roger = new Rabbit ("Rodzeris", "pilkos", "3", "namuose");
roger.PetsIntroduce();
console.log(roger.habbit);

const nemo = new Nemo ("Nemo", "juodai oranzines", "0", "vandenyje");
nemo.FishesIntroduce();

const parrot = new Parrot ("Papugai", "margos", "9", "miske");
parrot.BirdsIntroduce();




// Animal (params: name, color; methods: sound, introduce)
//     Pet (params: legsCount, likePlaying, methods: walk)
//         Dog
//         Cat
//         Rabbit
//     Bird (params: wingsCount; methods: fly)
//         Parrot (methods: repeatSound)
//         Sparrow
//         Chicken
//     Fish (params: fin; methods: swim)
//         Goldfish
//         Nemofish
//         Salmon