(function () {
    let homePage = document.getElementById("homePage")
    let likedPage = document.getElementById("likedPage")
    let blackListPage = document.getElementById("blackListPage")


// create user 
    let user = new User();

    let manager = new MainManager() // В тази променлива ще "бутаме" обектите след цикъла 
//create Matches // наливаме ги в класът Match 
    for (let i = 0; i < fakeUsers.length; i++) {
        let obj = fakeUsers[i] // така i е всеки един обект по отделно  
        let match = new Match(
            obj.firstName,
            obj.lastName,
            obj.title,
            obj.id,
            obj.picture,
            obj.email,
            obj.hobbies // Да опитам да създам html select, който има хоби - да излизат в списък, който не - undefined.
        )
        
        manager.add(match) // add е функция, която сме си написали в Main Manager файлът.
        
    }
    console.log(manager.matches);


printOnScreen(manager.matches, homePage) // 2рия аргумент е homePage, защото сега ще принтираме в homepage, но идеята е после да преизползваме функцията, като просто променим това "къде ще принтира" - 2рия аргумент
function printOnScreen(matches, container) { // това са параметрите, според зависи какво подаваме от аргументите, контейнера се мени
    //Итерирай през всеки обект
    for (let i = 0; i < matches.length; i++) { // За да направи едно и също за всеки обект 
        let match = matches[i] //---за да не пиша всеки път matches[i] по-надолу
         //Създай див
         let div = document.createElement("div");
         div.classList.add("card")
         //Създай img 
         let img = document.createElement("img");
         img.src = match.picture
         img.alt = `match${i}`
         //създай h3 
         let h3 = document.createElement("h3");
         h3.innerHTML = match.firstName + " " + match.lastName
         //създай h4 да опитам да сложа и хобитата в картичките това е за името 
         let h4 = document.createElement("h4");
         if (match.hobbies !== undefined) {
            h4.innerHTML = match.hobbies
         } else {
            h4.innerHTML = "Няма хобита."
         }

         let likeButton = document.createElement("button")
         likeButton.innerText = "Like"

         let blockButton = document.createElement("button")
         blockButton.innerText = "block"
         
         div.append(img,h3,h4,likeButton,blockButton)
         container.append(div) // container tuk e променлива, чиито контейнер се променя според зависи какво сме бутали, като аргумент във функцията ни принт.
         
         //създай 2 бутона 
         //добави ги в дива 
     //добави дива в контейнера
        
    }
       
}


    
    let onHashChange = function () {
        let hash = location.hash.slice(1) 
        
        switch (hash) {
            case "homePage":
                homePage.style.display= "flex";
                likedPage.style.display= "none";
                blackListPage.style.display= "none"
                break;
            case "likedPage":
                homePage.style.display="none";
                likedPage.style.display="flex";
                blackListPage.style.display="none"
                break;
            case "blackListPage":
                homePage.style.display="none";
                likedPage.style.display="none";
                blackListPage.style.display="flex"
                break
        
            default:
                homePage.style.display="flex";
                likedPage.style.display="none";
                blackListPage.style.display="none"
                break;
        }
    }
    
    window.addEventListener("hashchange", onHashChange)
    window.addEventListener("load", onHashChange)
    
    
})()
