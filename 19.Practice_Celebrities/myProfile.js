const firstN = document.getElementById("firstN");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorName = document.getElementById("error-name")
const errorPass = document.getElementById("error-pass")
let uploadPicture = document.getElementById("upload-picture")
let profilePic = document.getElementById("profile-pic")



let nameValue = document.getElementById("nameValue")
// let likedUsers = document.getElementById("likedUsersCounter")



form.addEventListener("submit", (e) => {
    e.preventDefault()
    let messagesName = []
    let messagesPass = []

    let name = firstN.value
    let age = password.value
    user.updateProfile(name, age)
    nameValue.innerText = `${user.name}`

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



  function updateProfilePic() {
    const file = document.querySelector('#uploadImage').files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
    localStorage.setItem("image", reader.result);
    document.getElementById("imagePreview").setAttribute("src", localStorage.getItem("image"))
    };
}
if(localStorage.getItem("image"))
    document.getElementById("imagePreview").setAttribute("src", localStorage.getItem("image"))



   