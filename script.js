

function toggle(){
    const menu = document.getElementById("menu1")
const button = document.getElementById("button")
    if (menu.style.display == "block"){
        menu.style.display = "none"
    } else {
       menu.style.display = "block"
    }

}
function toggle2(){
    const menu = document.getElementById("menu2")

    if (menu.style.transform == "translateY(0vw)"){
        menu.style.transform = "translateY(-200vw)"
    } else {
       menu.style.transform = "translateY(0vw)"
    }

}
function login(){
    const id = document.getElementById("email");
    const password = document.getElementById("password");
    id.innerHTML = "Email is not found"
    id.classList.add("text-red-800");
    id.classList.remove("text-gray-900");
    password.innerHTML = "Password doesnt match email"
    password.classList.add("text-red-700");
    password.classList.remove("text-gray-900");
}