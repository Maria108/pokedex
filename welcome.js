let button = document.getElementById("btn-open-pokedex")
let divWelcome = document.getElementById("welcome")

button.addEventListener("click", () => {
    divWelcome.className = "fadeout"
    setTimeout(function() {
        divWelcome.style.display = "none";
    }, 1000);

});