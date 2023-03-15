// toggle icon Navbar
window.addEventListener("load", () => {
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
  //Remove toggle icon Navbar
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
});

