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
  if (price.value != ``) {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.textContent = result;
    total.style.color = " #4caf50";
  } else {
    total.textContent = "";
    total.style.color = "#f44336";
  }
}

//create product
let data;
if (localStorage.product != null) {
  data = JSON.parse(localStorage.product);
} else {
  data = [];
}

create.addEventListener("click", function () {
  var datapro = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };
  data.push(datapro);
  console.log(data);
  localStorage.setItem(`product`, JSON.stringify(data));
  clearInputs();
});
//clear inputs
function clearInputs() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
  total.style.color = "#f44336";
}
