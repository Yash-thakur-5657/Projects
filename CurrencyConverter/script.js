const BASE_URL =
  "https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json";

let selectElements = document.querySelectorAll("select");
let btn = document.querySelector(".convert-btn");
let fromCurrency = document.getElementById("from-currency");
let toCurrency = document.getElementById("to-currency");
let result = document.querySelector("#converted-amount");

for (let select of selectElements) {
  for (let countryCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = countryCode;
    newOption.value = countryCode;
    if (select.id === "from-currency" && countryCode === "USD") {
      newOption.selected = true;
    } else if (select.id === "to-currency" && countryCode === "INR") {
      newOption.selected = true;
    }
    select.append(newOption);

  }
}

btn.addEventListener("click", async (event) => {
  event.preventDefault();
  let amount = document.querySelector("input");
  let amountValue = amount.value;
  if (amountValue === "" || amountValue < 1) {
    amountValue = 1;
    amount.value = 1;
  }

  let response = await fetch(BASE_URL);

  let ourData = await response.json();
  console.log(ourData);
  

  let fromRate = ourData.eur[fromCurrency.value.toLowerCase()];
  console.log(fromRate);

  let toRate = ourData.eur[toCurrency.value.toLowerCase()];
  console.log(toRate);

  let finalAmount = amountValue * (toRate / fromRate);
  result.innerText = `${amountValue} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
});
