// 1️⃣ DATA MUST COME FIRST
const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  GBP: "GB",
  HKD: "HK",
  IDR: "ID",
  INR: "IN",
  JPY: "JP",
  KRW: "KR",
  PKR: "PK",
  SAR: "SA",
  USD: "US"
};

// 2️⃣ SELECT ELEMENTS
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// 3️⃣ POPULATE DROPDOWNS
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let option = document.createElement("option");
    option.value = currCode;
    option.innerText = currCode;

    if (select.name === "from" && currCode === "USD") option.selected = true;
    if (select.name === "to" && currCode === "PKR") option.selected = true;

    select.append(option);
  }

  select.addEventListener("change", (e) => updateFlag(e.target));
}

// 4️⃣ UPDATE FLAG
function updateFlag(element) {
  let countryCode = countryList[element.value];
  let img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// 5️⃣ CONVERT CURRENCY (WORKING)
btn.addEventListener("click", async (e) => {
  e.preventDefault();

  let amountInput = document.querySelector(".amount input");
  let amount = Number(amountInput.value);

  if (!amount || amount < 1) {
    amount = 1;
    amountInput.value = "1";
  }

  try {
    const url = `https://api.exchangerate.host/convert?from=${fromCurr.value}&to=${toCurr.value}&amount=${amount}`;
    const res = await fetch(url);
    const data = await res.json();

    // ✅ SAFETY CHECK
    if (!data || data.result === undefined) {
      msg.innerText = "Conversion failed. Try again.";
      return;
    }

    msg.innerText = `${amount} ${fromCurr.value} = ${data.result.toFixed(2)} ${toCurr.value}`;

  } catch (err) {
    msg.innerText = "Network error. Please try again.";
    console.error(err);
  }
});

