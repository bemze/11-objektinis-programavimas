import { Birds } from './Birds.js'

class Parrot extends Birds {
    constructor(name, color, age, miske, sound) {
    super(name, color, age, miske);
    this.sound = "kalbeti"
}
}
export { Parrot }



