// 8 създаваме клас 
class User {
    // 9 създаваме конструктор
    constructor(){
        this.liked = []
        this.blocked = []

    }
    // 10. функция за харесване
    like(tupalka) {
        //10.1 Дали човека е блокиран, правим променлива за по-добра четимост
         let idx = this.blocked.indexOf(tupalka)
         //10.2 Махаме, ако съществува в blocked
        if(idx !== -1) {
            this.blocked.splice(idx,1)
        }
        // 10.3 Проверка, ако вече сме го добавили - да не го добавяме отново към масива. 
        if (this.liked.indexOf(tupalka) === -1) { // -1, защото indexOf ще даде -1, ако го няма (тоест не е добавен)
            this.liked.push(tupalka)
        }
        
    }
    //11 функция за блокиране 
    block(tupalka){
        //11.1 Дали човека е лайкнат, правим променлива за по-добра четимост
        let idx = this.blocked.indexOf(tupalka)
        //11.2 Махаме, ако съществува в liked
        if(idx !== -1) {
            this.blocked.splice(idx,1)
        }
        // 10.3 Проверка, ако вече сме го добавили - да не го добавяме отново към масива. 
        if (this.blocked.indexOf(tupalka) === -1) { // -1, защото indexOf ще даде -1, ако го няма (тоест не е добавен)
             this.blocked.push(tupalka)
         }
        
    }
}