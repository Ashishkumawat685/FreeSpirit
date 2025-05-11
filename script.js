// Header SubMenu toggle

let isSubmenuOpen = false;

function toggleHeaderSubmenu() {
  const Header_Submenu = document.getElementById("Header_Submenu");
  const Header_Main_menu = document.getElementById("Header_Main_menu");

  if (!isSubmenuOpen) {
    Header_Submenu.style.maxHeight = "500px";
    Header_Main_menu.style.transform = "rotate(180deg)";
    isSubmenuOpen = true;
  } else {
    Header_Submenu.style.maxHeight = "0px";
    Header_Main_menu.style.transform = "rotate(0deg)";
    isSubmenuOpen = false;
  }
}

// ....................... Responshiv Header........................
function ResponshivHeaderShow() {
  const header = document.getElementById("main-header");
  const Menu_icon = document.getElementById("Menu_icon");
  const Cross_icon = document.getElementById("Cross_icon");
  header.style.maxHeight = "700px";
  header.classList.add("scrolledshow");
  Menu_icon.style.display = "none";
  Cross_icon.style.display = "flex";
}
function ResponshivHeaderHide() {
  const header = document.getElementById("main-header");
  const Menu_icon = document.getElementById("Menu_icon");
  const Cross_icon = document.getElementById("Cross_icon");
  header.style.maxHeight = "0px";
  header.classList.remove("scrolledshow");
  Menu_icon.style.display = "flex";
  Cross_icon.style.display = "none";
  Cross_icon.style.overflow = "hidden";
}
// Header Phon show...............
window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY > 1) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
