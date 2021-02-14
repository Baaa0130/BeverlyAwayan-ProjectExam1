var menuActive = false
menu = document.getElementById("menuToggler");
menu.onclick = function () {
  menuActive = !menuActive
  
  if (menuActive) {
    document.querySelector("header nav").classList.add("active");
  } else {
    document.querySelector("header nav").classList.remove("active");
  }
}