const navBars = document.querySelector(".fas")
const navMenu = document.querySelector(".nav-menu")

navBars.addEventListener("click", () =>{
    navMenu.classList.toggle("active");
});
