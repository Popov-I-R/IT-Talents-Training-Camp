//14
class TupalkaManager {
    //15
    constructor() {
        this.tupalki = []
    }
    //16
    add(tupalka) {
        if (this.tupalki.indexOf(tupalka) === -1) {
            this.tupalki.push((tupalka))
        }
    }
}