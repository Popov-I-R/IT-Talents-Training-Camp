let body = document.getElementById("body")

body.addEventListener('click', function(){
    document.getElementById("results").classList.remove("showIt");
    document.getElementById("results").classList.add("hideIt");
})

let search = document.getElementById("searchField")
search.addEventListener("click", function(){
    document.getElementById("results").classList.remove("hideIt");
    document.getElementById("results").classList.add("showIt");
})



