// Footer Items

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

var select = document.querySelector(".footer-list");

for (var i = 0; i < footerArray.length; i++) {
  var listItem = footerArray[i];
  var el = document.createElement("li");
  el.classList.add("footer-list-item");
  el.textContent = listItem;
  select.appendChild(el);
}
