const date = new Date();

document.getElementById("date").innerHTML = date;

const menuBtn = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function(e) {
  e.preventDefault();
  if (navLinks.classList.contains('hidden')) {
    navLinks.classList.remove('hidden');
  } else {
    navLinks.classList.add('hidden');
  }
});
