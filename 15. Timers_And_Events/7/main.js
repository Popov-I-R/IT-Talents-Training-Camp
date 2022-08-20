var inputButton = document.getElementById("submit-product");
var userInput = document.getElementById("user-input");
var form = document.getElementById("form");


form.addEventListener('click', (e) => {
    e.preventDefault();
})

// Добави в списъка
function addToList() {

    if (userInput.value.length > 0 ) {
        var newH4 = document.createElement("h4");
        newH4.id = `${userInput.value}--${Math.random()}`
        newH4.className = "h4-class";
        newH4.appendChild(document.createTextNode(userInput.value.toUpperCase()))

        var newMyProductName = document.createElement("div");
        newMyProductName.id = `my-product-name`;
        newMyProductName.className  = "my-product-name";
        newMyProductName.appendChild(newH4);

        var newMyProductDiv = document.createElement("div");
        newMyProductDiv.id = "my-product";
        newMyProductDiv.className = "my-product";
        newMyProductDiv.appendChild(newMyProductName);

        let productsList =document.getElementById("products-list");
        productsList.appendChild(newMyProductDiv);

        var newDeleteButton = document.createElement("button");
        newDeleteButton.appendChild(document.createTextNode("Премахни продукт"))
        newDeleteButton.id = `${newH4.id}`;
        newDeleteButton.className = "deleteButton";
        newMyProductDiv.appendChild(newDeleteButton);
    }
    userInput.value = "";
}

inputButton.addEventListener('click', addToList);


// За взимане на ID 
document.addEventListener("click", (e) => {
    let elementId = e.target.id;
    let elementClass = e.target.className;

    // За смяна на стил
    if (elementId !== "" && elementClass === "h4-class") {
        changeElementStyle(elementId);
    } 
    // За изтриване на елемент
    if (elementClass === "deleteButton") {
        deleteElement(elementId);
    }
});

// Смяна стил/функция
function changeElementStyle(e) {

    let elToChange = document.getElementById(`${e}`);
    elToChange = elToChange
    
    if (elToChange.style.textDecoration === "line-through") {
        elToChange.style.setProperty('text-decoration', 'none');
    } else {
        elToChange.style.setProperty('text-decoration', 'line-through');
    }
    
}

// 
function deleteElement(e) {
    let elToDelete = document.getElementById(`${e}`);
    elToDelete = elToDelete.parentElement.parentElement
    elToDelete.remove()
}


