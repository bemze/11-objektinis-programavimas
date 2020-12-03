import { Animals } from "../Animals.js";
class Birds extends Animals {
    constructor(name, color, age, miske){ 
    super(name, color, age);
        this.place = miske;
    }
}
export { Birds }