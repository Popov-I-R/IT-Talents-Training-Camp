let buttonNext = document.getElementById("buttonNext");
let buttonPrevious = document.getElementById("buttonPrevious");

buttonNext.addEventListener("click",function(e) {
    e.preventDefault();
    let nodes = document.querySelectorAll(".page-item");
    let text = searchField.value;

    nodes.forEach((e) => {
        if (e.classList.contains("active")) {
           let elId = e.id;
           let nextElId = +elId + 1;
           makeNewReqOnPageChange(text,nextElId);
        }
    });
})

buttonPrevious.addEventListener('click', function(e) {
    e.preventDefault();
    let nodes = document.querySelectorAll(".page-item");
    let text = searchField.value;

    nodes.forEach((e) => {
        if (e.classList.contains("active") && e.id !== 1) {
           let elId = e.id
           let nextElId = +elId - 1
           makeNewReqOnPageChange(text,nextElId)
        }
    });
})


function disablePreviousButtonIfUserIsOnFirstPage(page){
    if (page > 1) {
        document.getElementById("prevButton").classList.remove("disabled")
    } else {
        document.getElementById("prevButton").classList.add("disabled")
    }
}

function disableNextButtonIfUserIsOnLastPage(page,totalPages){
    if (page == totalPages ) {
        document.getElementById("nextButton").classList.add("disabled")
    } else {
        document.getElementById("nextButton").classList.remove("disabled")
    }
}