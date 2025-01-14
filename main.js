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
let tbody = document.querySelector("#tbody");
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
  read();
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
  read();
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

//read

function read() {
  let readPro = "";
  for (let i = 0; i < data.length; i++) {
    readPro += ` <tr>
                <td>${[i]}</td>
                <td>${data[i].title}</td>
                <td>${data[i].price}</td>
                <td>${data[i].taxes}</td>
                <td>${data[i].ads}</td>
                <td>${data[i].discount}</td>
                <td>${data[i].total}</td>
                <td>${data[i].category}</td>
                <td><button class="update" id="update">update</button></td>
                <td><button class="delete" onclick="deleteOne(${i})" id="Delete">Delete</button></td>
              </tr>`;
  }

  tbody.innerHTML = readPro;
  if (readPro.length > 0) {
    let deleteAll = document.querySelector("#deleteAll");
    deleteAll.style.display = "block";
  } else {
    deleteAll.style.display = "none";
  }
}

function deleteOne(i) {
  data.splice(i, 1);
  localStorage.setItem(`product`, JSON.stringify(data));
  read();
}

function deleteAllfunction() {
  data.splice(0);
  localStorage.clear();
  read();
}
