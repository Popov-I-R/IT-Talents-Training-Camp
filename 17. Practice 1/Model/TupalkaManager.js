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
    // 22 - produljenie za rabotata na tursachkata 
    filter(text) {
        let filtered = []
        text = text.toLocaleLowerCase() // tova e za da raboti i s glavni bukvi 
        for (let i = 0; i < this.tupalki.length; i++) {
            let tupalka = this.tupalki[i]
            if (tupalka.firstName.toLocaleLowerCase().includes(text) || 
                tupalka.lastName.toLocaleLowerCase().includes(text) ||
                tupalka.email.toLocaleLowerCase().includes(text)) {
                filtered.push(tupalka)
            }
            
        }
        return filtered;
    }




}