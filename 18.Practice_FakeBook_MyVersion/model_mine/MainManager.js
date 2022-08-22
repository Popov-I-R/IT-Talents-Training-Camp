class MainManager {

    constructor() {
        this.matches = []
    }

    add(match) {
        if (this.matches.indexOf(match) === -1) { // С този иф се подсигуряваме, че ще добавяме само по веднъж в масива. 
            this.matches.push(match) 
        }
    }

    filter(text) {
        // Да върнем всичко, което съдържа в името си този текст 
        let filtered = []
        for (let i = 0; i < this.matches.length; i++) {
            if (this.matches[i].firstName.includes(text)|| 
                 this.matches[i].lastName.includes(text)|| 
                 this.matches[i].email.includes(text) )  {
                filtered.push(this.matches[i])
            }
            
        }
        return filtered;
    }

    select(hobby) {
        let selected = []
        for (let i = 0; i < this.matches.length; i++) {
            if (this.matches[i].hobbies !== undefined) {
                if (this.matches[i].hobbies.includes(hobby))  {
                    selected.push(this.matches[i])
                }
            }
            
        }
        return selected;
    }
    
    
    
}