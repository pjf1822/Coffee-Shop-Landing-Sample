// Arrays

const footerArray = [
  "Contact Us",
  " Terms & Conditions",
  "Online",
  "Refund ",
  "Policy",
  "Privacy ",
  "Policy",
  " My account",
];

// creating the footer

var footerWrapper = document.querySelector(".footer-list");

for (var i = 0; i < footerArray.length; i++) {
  var listItemContent = footerArray[i];
  var footerListItem = document.createElement("li");
  footerListItem.classList.add("footer-list-item");
  footerListItem.textContent = listItemContent;
  footerWrapper.appendChild(footerListItem);
}

// mobile Nav

const menu = document.querySelector(".nav-wrapper-mobile");
const hamburger = document.querySelector(".hamburger");
const hamburgerLines = document.querySelectorAll(".hamburger-line");
const bodyNot = document.body;

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    for (let i = 0; i < hamburgerLines.length; i++) {
      hamburgerLines[i].classList.remove("blackBurger");
    }
    bodyNot.classList.remove("stopScroll");
  } else {
    menu.classList.add("showMenu");
    for (let i = 0; i < hamburgerLines.length; i++) {
      hamburgerLines[i].classList.add("blackBurger");
    }

    bodyNot.classList.add("stopScroll");
  }
}

hamburger.addEventListener("click", toggleMenu);
