//get total
//create product
//save lockalstorage
//clear inputs
//read
//count
//uppdate
//delete
//clean data

const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme", themeSwitch.checked);
});

//get elements
let title = document.querySelector("#title");
let price = document.querySelector("#price");
let taxes = document.querySelector("#taxes");
let ads = document.querySelector("#ads");
let discount = document.querySelector("#discount");
let total = document.querySelector("#total");
let count = document.querySelector("#count");
let category = document.querySelector("#category");
let create = document.querySelector("#create");
let search = document.querySelector("#search");
let byTitle = document.querySelector("#byTitle");
let byCategory = document.querySelector("#byCategory");
//get total
function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.textContent = result;
    total.style.color = " #4caf50";
  } else {
    total.textContent = "";
    total.style.color = "#f44336";
  }
}
