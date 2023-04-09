// Navigation
const menu = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-link");

menu.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("nav-link")) {
    links.forEach((link) => {
      link.parentElement.classList.remove("active");
      e.target.parentElement.classList.add("active");
    });
  }
});
