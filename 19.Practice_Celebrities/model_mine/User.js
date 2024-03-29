// Клас/прототип User 
class User  {


    constructor() {

        this.liked = [] // Първо създаваме двата масива за харесани и за блокирани 
        this.blocked = [] 
        this.name = "test"
        this.age = ""

        
    }

    countLiked() {
        console.log(this.liked.length);
        return this.liked.length
        
    }



    // Тези неща отговарят за бутоните  - like & block 
    like(match) { 
        // Проверка, ако го имаме в блокирани - да го махнем от там и да го пушнем тук.
        let getIndex = this.blocked.indexOf(match)
        if (getIndex !== -1 ) { 
            this.blocked.splice(getIndex, 1)
        }
        if (this.liked.indexOf(match) === -1) { // С този иф се подсигуряваме, че ще добавяме само по веднъж в масива. 
            this.liked.push(match) 
        }    
    }

    block(match) { // Съответно, ако го има в харесваните - да го махнем от там и да го сложим в блокирани
        let getIndex = this.liked.indexOf(match) // Правим променлива за да вземем индекса
        if (getIndex !== -1 ) { // ако е различно от -1, значи имаме индекс(защого горе ползваме indexof), така че го сплайсваме 
            this.liked.splice(getIndex, 1)
        }
        if (this.blocked.indexOf(match) === -1) { // С този иф се подсигуряваме, че ще добавяме само по веднъж в масива. 
            this.blocked.push(match)
        }
    }


    isLiked(match) {
        return this.liked.indexOf(match) !== -1
    }

    unlike(match) {
        let getIndex = this.liked.indexOf(match)
        if (getIndex !== -1) {
            this.liked.splice(getIndex,1)
        }
         
        
    }

    isBlocked(match) {
        return this.blocked.indexOf(match) !== -1
    }

    unblock(match) {
        let getIndex = this.blocked.indexOf(match)
        if (getIndex !== -1) {
            this.blocked.splice(getIndex,1)
        }
    }

    updateProfile(name,age) {
        this.name = name 
        this.age = age 
        console.log(this.name, this,age );
    }

    }

