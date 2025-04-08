const navbar = document.getElementById("hamburger");
const nav = document.getElementById("navlist");


navbar.addEventListener("click", function () {
    nav.style.display = (nav.style.display === "block") ? "none" : "block";
    navbar.classList.toggle("active");
    


}   );