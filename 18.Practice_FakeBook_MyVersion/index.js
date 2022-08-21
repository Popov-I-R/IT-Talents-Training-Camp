(function () {

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




    let homePage = document.getElementById("homePage")
    let likedPage = document.getElementById("likedPage")
    let blackListPage = document.getElementById("blackListPage")
    
    let onHashChange = function () {
        let hash = location.hash.slice(1) 
        
        switch (hash) {
            case "homePage":
                homePage.style.display= "block";
                likedPage.style.display= "none";
                blackListPage.style.display= "none"
                break;
            case "likedPage":
                homePage.style.display="none";
                likedPage.style.display="block";
                blackListPage.style.display="none"
                break;
            case "blackListPage":
                homePage.style.display="none";
                likedPage.style.display="none";
                blackListPage.style.display="block"
                break
        
            default:
                homePage.style.display="block";
                likedPage.style.display="none";
                blackListPage.style.display="none"
                break;
        }
    }
    
    window.addEventListener("hashchange", onHashChange)
    window.addEventListener("load", onHashChange)
    
    
})()

