let carres = document.querySelectorAll(".carre");
let titre = document.querySelector("h1");

carres.forEach(carre => {
    carre.addEventListener("click", function() {
        carre.classList.toggle('active')
    })
})
