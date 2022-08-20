  
  
  //6. Слагаме във функция всичко написано до сега за да не ни е в глобалния скоуп 
  (function () {
      // 1. Slagame 3te id-ta v promenlivi za po-udobno 
  let homePage = document.getElementById("homePage");
  let cuttiesPage = document.getElementById("cuttiesPage");
  let blackListPage = document.getElementById("blackListPage");
  let homeResults = document.getElementById("results");
    //7. Когато стартираме страницата, ние искаме още да се зареди 
        //14 - create user 
        let user = new User() // Tuk durjim nashite like-nati i block-nati potrebiteli 
         //16.  add tupalki to my manager 
         let manager = new TupalkaManager() // tuk durjim vsichkite potrebiteli, koito sa v sistemata 
        //15 -  create tupalki // Вече имаме готови действия за тупалките 
        for (let i = 0; i < fakeUsers.length; i++) {
            let obj = fakeUsers[i];
            let tupalka = new Tupalka( // Създаваме обект тип тупалка и ги наляхме в manager-a 
                obj.firstName,
                obj.lastName,
                obj.picture,
                obj.email,
                obj.id
            );
            manager.add(tupalka)
        }

        // print tupalki 
            //17 Sega trqbva da printneme v html-a tupalki, za vseki edin obekt da imame kartichka 
            // Taka posle shte moga da preizpolzvam tazi funkciq i da kaja "printirai laiknatite na potrebitelq "
        printTupalki(manager.tupalki, homeResults) // принтираме всички тупалки в home results 
      




  



  // Тъй като ще преизползваме 2 пъти кода, го слагаме във функция.
  let handleHashChange = function () {

      // 2. взимаме урл-то, от хаштага - нататък 
      let hash = location.hash.slice(1)
      // 3. пишем switch за сменяне на страници
      switch (hash) {
          case "home":
              homePage.style.display = "block";
              cuttiesPage.style.display = "none";
              blackListPage.style.display = "none";
              printTupalki(manager.tupalki, homeResults)
              break;
          case "cutties":
              homePage.style.display = "none";
              cuttiesPage.style.display = "flex";
              blackListPage.style.display = "none";
              printTupalki(user.liked, cuttiesPage)
          break;
          case "blacklist":
              homePage.style.display = "none";
              cuttiesPage.style.display = "none";
              blackListPage.style.display = "flex";
              printTupalki(user.blocked, blackListPage)
          break;
      
          default: // 4. Ако вляза в сайта без хеш, дефолтен линк. Евентуално може и error page да има 
          homePage.style.display = "flex";
          cuttiesPage.style.display = "none";
          blackListPage.style.display = "none";
          printTupalki(manager.tupalki, homeResults)
          break;
      }
  }
  //5. event pri startirane da ima samo edin hash, a ne vsichki 
  window.addEventListener('load', handleHashChange)
  //5.  hvani dali e smenen hash-a. Ako e smenen - skrii dva diva. (auto-scroll kum id) One Page Appli -> HASH 
  window.addEventListener('hashchange', handleHashChange)



    //18 Pravim funkciq na koqto da kazvame kakvo i kude da printira za da mojem da q preizpolzvame
    function printTupalki(tupalki, container) {
        container.innerHTML = ""


        

        // iterate each object 
        //create a div 
        // create an img 
            //create h3
            //create h4 
            //add them to the div 
        // add them to the container 

        for (let i = 0; i < tupalki.length; i++) {
            let tupalka = tupalki[i]
            let div = document.createElement("div");
            div.classList.add("card");
    
            let img = document.createElement("img");
            img.style.height = "220px"
            img.src = tupalka.imgUrl;
            img.alt = "tupalka"; 

            let h3 = document.createElement("h3");
            // let text = document.createTextNode
            h3.innerHTML = tupalka.firstName + " " + tupalka.lastName;
            
            let h4 = document.createElement("h4");
            // let text = document.createTextNode
            h4.innerHTML = tupalka.email;


            let likeButton = document.createElement("button")
            //22.3 - Za promqnata na butona, ako e veche haresan 
            if(user.isLiked(tupalka)) {
                likeButton.innerText = "Dislike"
                likeButton.addEventListener("click", function () {
                    //19 funkciqta like ot "user.js" trqbva da imame dostup user,koito suzdadohme po-gore
                    user.unlike(tupalka);
                    handleHashChange();
                });
            } else {
                                        // ---
            likeButton.innerText = "Like"
            likeButton.addEventListener("click", function () {
                //19 funkciqta like ot "user.js" trqbva da imame dostup user,koito suzdadohme po-gore
                user.like(tupalka);
                handleHashChange();
            });
            }



        
            let blockButton = document.createElement("button")
            if (user.isBlocked(tupalka)) {
                blockButton.innerText = "Unblocked";
                blockButton.addEventListener("click", function() {
                    user.unblock(tupalka);
                    handleHashChange();
                });
            } 
            else {
                blockButton.innerText = "Block"
                blockButton.addEventListener("click", function() {
                    user.block(tupalka);
                    handleHashChange();
                });
            }



            // 19 Sled kato sme gi suzdali, trqbva da gi naleem v diva 
            // principno imame appendChild, no toi priema samo edin element 
            // Imame obache i append, koito priema mn elementi navednuj 
            div.append(img,h3,h3,likeButton,blockButton)
            container.append(div)

        }
    }

    //21 Zapochvame koda za search poleto 
        //zakachame sarch-filed id-to kum promenliva 
    let search = document.getElementById("filter-field");
    search.addEventListener('keyup', function(event){
        // 21.1 Vzemi stoinostta 
        let text = event.target.value 
        //21.2 Proveri koi sa vsichki tupalki,koito imat tozi input v imenata si 
        let filtered = manager.filter(text)
        //21.3 printirai gi 
        printTupalki(filtered, homeResults)
    })
  })()
  
