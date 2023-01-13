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

// const navArray = ["Online Store", "Cafe Locations", "Menu", "About", "Careers"];

// const navItem0 = [
//   "coffee",
//   "gift cards",
//   "apparel",
//   "Mugs & Accessories",
//   "Gift Baskets",
// ];

// const navItem2 = ["Menu Items", "Nutritional Value"];
// const navItem4 = ["Online Application", "Print Application"];

// creating the footer

var footerWrapper = document.querySelector(".footer-list");

for (var i = 0; i < footerArray.length; i++) {
  var listItemContent = footerArray[i];
  var footerListItem = document.createElement("li");
  footerListItem.classList.add("footer-list-item");
  footerListItem.textContent = listItemContent;
  footerWrapper.appendChild(footerListItem);
}

// creating the nav bar

// var navList = document.querySelector(".nav_itemsList");

// for (var i = 0; i < navArray.length; i++) {
//   var navListItemContent = navArray[i];
//   var navListItem = document.createElement("li");
//   navListItem.classList.add(`nav_listItem${i}`, "nav_listItem");
//   navListItem.textContent = navListItemContent;
//   navList.appendChild(navListItem);
// }

// First Nav Item

// var navList0 = document.querySelector(".nav_listItem0");

// for (var i = 0; i < navItem0.length; i++) {
//   var navListItem0Content = navItem0[i];
//   var navListItem0 = document.createElement("li");
//   navListItem0.classList.add("nav_listItemDropdown");
//   navListItem0.textContent = navListItem0Content;
//   navList0.appendChild(navListItem0);
// }

// Third Nav Item

// var navList2 = document.querySelector(".nav_listItem2");

// for (var i = 0; i < navItem2.length; i++) {
//   var navListItem2Content = navItem2[i];
//   var navListItem2 = document.createElement("li");
//   navListItem2.classList.add("nav_listItemDropdown");
//   navListItem2.textContent = navListItem2Content;
//   navList2.appendChild(navListItem2);
// }

// Fifth Nav Item

// var navList4 = document.querySelector(".nav_listItem4");

// for (var i = 0; i < navItem4.length; i++) {
//   var navListItem4Content = navItem4[i];
//   var navListItem4 = document.createElement("li");
//   navListItem4.classList.add("nav_listItemDropdown");
//   navListItem4.textContent = navListItem4Content;
//   navList4.appendChild(navListItem4);
// }

// nav menu

const menu = document.querySelector(".nav-wrapper-mobile");
const hamburger = document.querySelector(".hamburger");
const hamburgerLines = document.querySelectorAll(".hamburger-line");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
    for (let i = 0; i < hamburgerLines.length; i++) {
      console.log("hamburger-line", hamburgerLines[i]);
      hamburgerLines[i].classList.add("blackBurger");
    }
  }
}

hamburger.addEventListener("click", toggleMenu);
