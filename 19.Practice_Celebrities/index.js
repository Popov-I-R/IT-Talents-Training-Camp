(function () {
    let homePage = document.getElementById("homePage")
    let likedPage = document.getElementById("likedPage")
    let blackListPage = document.getElementById("blackListPage")
    let homeResults = document.getElementById("results")
    let select = document.getElementById("select")
    let selectAge = document.getElementById("selectByAge")
    let myProfilePage = document.getElementById("myProfilePage")
    let createRecipePage = document.getElementById("createRecipePage")
    


// create user 
    let user = new User();

    let manager = new MainManager() // В тази променлива ще "бутаме" обектите след цикъла 
//create Matches // наливаме ги в класът Match 
    for (let i = 0; i < fakeCelebrities.length; i++) {
        let obj = fakeCelebrities[i] // така i е всеки един обект по отделно  
        let match = new Match(
            obj.id,
            obj.firstName,
            obj.lastName,
            obj.age,
            obj.gender,
            obj.image,
            obj.price 
        )
        
        manager.add(match) // add е функция, която сме си написали в Main Manager файлът.
        
    }


printOnScreen(manager.matches, homeResults) // 2рия аргумент е homePage, защото сега ще принтираме в homepage, но идеята е после да преизползваме функцията, като просто променим това "къде ще принтира" - 2рия аргумент

function printOnScreen(matches, container) { // това са параметрите, според зависи какво подаваме от аргументите, контейнера се мени
   container.innerHTML = ""
    //Итерирай през всеки обект
    for (let i = 0; i < matches.length; i++) { // За да направи едно и също за всеки обект 
        let match = matches[i] //---за да не пиша всеки път matches[i] по-надолу
         //Създай див
         let div = document.createElement("div");
         div.classList.add("card")
         //Създай img 
         let img = document.createElement("img");
         img.src = match.image
         img.alt = `match${i}`
         //създай ИМЕ
         let h3 = document.createElement("h3");
         h3.innerHTML = match.firstName + " " + match.lastName
         

         let likeButton = document.createElement("button")
         if (user.isLiked(match)) {
            likeButton.innerText = "Unlike"
            likeButton.addEventListener("click", function () {
               // on click trqbva da go pushvam v liked 
               user.unlike(match) // Ползва функцията like от класът User
               onHashChange()// Преизчертава екрана, за да изчезват, като натиснем бутона 
            })
         } else {
            likeButton.innerText = "Like"
            likeButton.addEventListener("click", function () {
               // on click trqbva da go pushvam v liked 
               user.like(match) // Ползва функцията like от класът User
               onHashChange()// Преизчертава екрана, за да изчезват, като натиснем бутона 
            })
         }


           
         let blockButton = document.createElement("button")
         if (user.isBlocked(match)) {
            blockButton.innerText = "unblock"
            blockButton.addEventListener("click", function () {
               // on click trqbva da go pushvam v liked 
               user.unblock(match) // Ползва функцията block от класът User 
               onHashChange() // Преизчертава екрана, за да изчезват, като натиснем бутона 
               
            })
         } else {
            blockButton.innerText = "block"
            blockButton.addEventListener("click", function () {
               // on click trqbva da go pushvam v liked 
               user.block(match) // Ползва функцията block от класът User 
               onHashChange() // Преизчертава екрана, за да изчезват, като натиснем бутона 
               
            })
         }

         
         div.append(img,h3,likeButton,blockButton)
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
                homePage.style.display= "block";
                likedPage.style.display= "none";
                blackListPage.style.display= "none"
                myProfilePage.style.display="none"
                createRecipePage.style.display="none";
                printOnScreen(manager.matches, homeResults)
                break;
            case "likedPage":
                homePage.style.display="none";
                likedPage.style.display="flex";
                blackListPage.style.display="none";
                myProfilePage.style.display="none";
                createRecipePage.style.display="none";
                printOnScreen(user.liked, likedPage)
                break;
            case "blackListPage":
                homePage.style.display="none";
                likedPage.style.display="none";
                blackListPage.style.display="flex";
                myProfilePage.style.display="none";
                createRecipePage.style.display="none";
                printOnScreen(user.blocked, blackListPage)
                break;
            case "myProfilePage":
                homePage.style.display="none";
                likedPage.style.display="none";
                blackListPage.style.display="none";
                myProfilePage.style.display="block";
                createRecipePage.style.display="none";
                break;
            case "createRecipePage":
                homePage.style.display="none";
                likedPage.style.display="none";
                blackListPage.style.display="none";
                myProfilePage.style.display="none";
                createRecipePage.style.display="block";
                break;

        
            default:
                homePage.style.display="block";
                likedPage.style.display="none";
                blackListPage.style.display="none"
                myProfilePage.style.display="none";
                createRecipePage.style.display="none";
                printOnScreen(manager.matches, homeResults)
                break;
        }
    }
    
    window.addEventListener("hashchange", onHashChange)
    window.addEventListener("load", onHashChange)
    
    let search = document.getElementById("search")
    search.addEventListener("keyup", function (event) {
        //get the value from the input 
        let text = event.target.value // ravnostoino e na tova da vzemem stoinostta na poleto
        let filtered = manager.filter(text)
        // check all that have this in their name
        // print 
        printOnScreen(filtered,homeResults)
 
    })

    // test za select by hobbies start 

    function getHobbies() {
       let hobbies = [] 
        
       for (let i = 0; i < manager.matches.length; i++) {
           let match = manager.matches[i]
           // Ako ima hobi (zashtoto ne vs imat)
           if (match.gender !== undefined) {
                // split,zashtoto nqkoi imat edno hobi,drugi poveche
               let arrOfHobbies = match.gender.split(",");
                //za vsqko edno hobi po otdelno da se pushne, ako go nqma - trima e za da nqma spaces
               for (let i = 0; i < arrOfHobbies.length; i++) {
                   let hobby = arrOfHobbies[i].trim()
                   if (!hobbies.includes(hobby)) {
                    hobbies.push(hobby)
                   }
               }
           }
       }
       // Obikoli  hobbies i suzdai options 
       for (let j = 0; j < hobbies.length; j++) {
           let getHobby = hobbies[j]
              let option =  document.createElement("option")
              option.setAttribute(`id`,`hobby${j}`);
              option.innerText = `${getHobby}`
              select.appendChild(option) 
       }
    }
    getHobbies()

    select.addEventListener("change", function (event) {
        let selectedHobby = event.target.value
        console.log(selectedHobby);
        if (selectedHobby === "Сортирай по пол") {
            printOnScreen(manager.matches, homeResults)
        } else {
            let filteredByHobby = manager.select(selectedHobby)
            printOnScreen(filteredByHobby,homeResults)
        }


    })

    // test za select by hobbies end 

    // TEST ZA SELECT PO GODINI START
    
        function getAge() {
       let differentAges = [] 
        
       for (let i = 0; i < manager.matches.length; i++) {
           let match = manager.matches[i]
           // Ako ima hobi (zashtoto ne vs imat)
           if (match.age !== undefined) {
            
                // split,zashtoto nqkoi imat edno hobi,drugi poveche
                //za vsqko edno hobi po otdelno da se pushne, ako go nqma - trima e za da nqma spaces
                   if (!differentAges.includes(match.age)) {
                    differentAges.push(match.age)
                   }
               
           }
       }
       // Obikoli  hobbies i suzdai options 
       for (let j = 0; j < differentAges.length; j++) {
           let optionAge = differentAges[j]
              let option =  document.createElement("option")
              option.setAttribute(`id`,`hobby${j}`);
              option.innerText = `${optionAge}`
              selectAge.appendChild(option) 
       }
    }
    getAge()

    selectAge.addEventListener("change", function (event) {
        let selectedAge = event.target.value
        
        if (selectedAge === "Сортирай по години") {
            printOnScreen(manager.matches, homeResults)
        } else {
            let filteredByAge = manager.selectAge(selectedAge)
            printOnScreen(filteredByAge,homeResults)
        }


    })



    // TEST ZA SELECT PO GODINI END 

    // TEST CREATE CELEBRITY START 
    let hash = location.hash.slice(1) 

    if(hash === 'createRecipePage') {
        document.getElementById('create-recipe-form').addEventListener('input', function(e){
            if(this.checkValidity()) {
                document.getElementById('create-recipe-submit').removeAttribute('disabled');
            } else {
                document.getElementById('create-recipe-submit').setAttribute('disabled', true);
            }
        });
    
        // Създаване на рецепта 
        document.getElementById('create-recipe-form').addEventListener('submit', function(e) {
            e.preventDefault();
            let form = this.elements;
            let newRecipe = new Match(
                form.id.value,
                form.firstName.value, 
                form.lastName.value, 
                form.age.value,
                form.gender.value, 
                form['image-source'].value, 
                form.price.value
            );
            manager.addCelebrity(newRecipe);
        });
    
    
    }
    // TEST CREATE CELEBRITY END 






    // Test/ Profile START
    
    // printProfile(profile, container)
    // function printProfile(profile,container) {
    //     innerHTML = ""


    // }




    // TEST/ PROFILE END 


    // TEST CREATE USER START 

    // TEST CREATE USER END 



})()



