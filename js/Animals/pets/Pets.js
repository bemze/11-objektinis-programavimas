
import { Animals } from "../Animals.js";

class Pets extends Animals {
    constructor(name, color, age, namuose, legs) {
       super(name, color, age)
        this.place = namuose;
        this.legs = 4;
        
    }
}
export { Pets }