class MainManager {

    constructor() {
        this.matches = []
        
    }

    add(match) { // Работи за добавяне 
        if (this.matches.indexOf(match) === -1) { // С този иф се подсигуряваме, че ще добавяме само по веднъж в масива. 
            this.matches.push(match) 
        }
    }

    edit(match) {
        for (let i = 0; i < this.matches.length; i++) {
            if (this.matches[i] === match) {
                this.matches[i].likes = this.matches[i].likes + 1
            }
            
        }
    }


    filter(text) {
        // Да върнем всичко, което съдържа в името си този текст 
        let filtered = []
        text = text.toLowerCase() // За да може да работи търсачката и с главни и с малки букви 
        for (let i = 0; i < this.matches.length; i++) {
            if (this.matches[i].firstName.toLowerCase().includes(text)|| 
                 this.matches[i].lastName.toLowerCase().includes(text))  {
                filtered.push(this.matches[i])
            }
            
        }
        return filtered;
    }

    select(hobby) {
        let selected = []
        for (let i = 0; i < this.matches.length; i++) {
            if (this.matches[i].gender === "Female" && hobby === "Female") {
                selected.push(this.matches[i])
            }
            if (this.matches[i].gender === "Male" && hobby === "Male") {
                selected.push(this.matches[i])
            }
            
        }

        return selected;
    }


    selectAge(hobby) {

        let selected = []

        for (let i = 0; i < this.matches.length; i++) {
            if (this.matches[i].age == hobby) {
                selected.push(this.matches[i])
            }
            
        }

        return selected;
    }

    
    addCelebrity(match) { // Работи за добавяне 
        if (this.matches.indexOf(match) === -1) { // С този иф се подсигуряваме, че ще добавяме само по веднъж в масива. 
            this.matches.unshift(match) 
        }
    }
    
 

}