class MainManager {

    constructor() {
        this.matches = []
    }

    add(match) {
        if (this.matches.indexOf(match) === -1) { // С този иф се подсигуряваме, че ще добавяме само по веднъж в масива. 
            this.matches.push(match) 
        }
    }
}