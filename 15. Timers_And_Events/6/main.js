const firstN = document.getElementById("firstN");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorName = document.getElementById("error-name")
const errorPass = document.getElementById("error-pass")

form.addEventListener("submit", (e) => {
    let messagesName = []
    let messagesPass = []

    if (firstN.value === "" || firstN.value == null) {
        messagesName.push("Name is required")
    }

    if (password.value === "" || password.value == null) {
        messagesPass.push("Password is required")
    }

    if (firstN.value.length <=3 || firstN.value.length >=9) {
        messagesName.push("Name must be longer than 3 characters and less than 9 characters!")
    }

    if (password.value.length <=3 || password.value.length >=9) {
        messagesPass.push("Password must be longer than 3 characters and less than 9 characters!")
    }

    if (messagesName.length > 0) {
        e.preventDefault()
        errorName.innerText = messagesName.join("\n")
    }

    if (messagesPass.length > 0) {
        e.preventDefault()
        errorPass.innerText = messagesPass.join("\n")
    }



    
})

