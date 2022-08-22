const firstN = document.getElementById("firstN");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorName = document.getElementById("error-name")
const errorPass = document.getElementById("error-pass")
let uploadPicture = document.getElementById("upload-picture")
let profilePic = document.getElementById("profile-pic")

form.addEventListener("submit", (e) => {
    e.preventDefault()
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

    if (uploadPicture.value !== "") {
        console.log(`xmm`);
        profilePic.setAttribute("src",`${uploadPicture.value}`)
    }

    
})

uploadPicture.addEventListener("change", onFileSelected(event))
function onFileSelected(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
  
    var imgtag = document.getElementById("upload-picture");
    imgtag.title = selectedFile.name;
  
    reader.onload = function(event) {
      imgtag.src = event.target.result;
    };
  
    reader.readAsDataURL(selectedFile);
  }


  function myFunction() {
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