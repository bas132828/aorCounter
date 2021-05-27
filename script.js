"use strict";

const counter = document.querySelector(".counter");
const dateInput = document.getElementById("aor");

let aorDay;
const today = Date.now();
const dateKeeper = document.querySelector(".date-keeper");

const localStorageFN = function (key, value) {
  localStorage.setItem(`${key}`, `${value}`);
};

const renderUI = function (days) {
  counter.textContent = days;
  days < 20 || days > 200
    ? (counter.style.fontSize = "20px")
    : (counter.style.fontSize = `${days}px`);
};
const calcDaysLeft = function (data) {
  aorDay = new Date(data).getTime();
  const difference = today - aorDay;
  return Math.floor(difference / 1000 / 60 / 60 / 24);
};

if (localStorage.getItem("date")) {
  dateKeeper.textContent = localStorage.getItem("date");
  renderUI(calcDaysLeft(dateKeeper.textContent));
}

const getAorDate = function () {
  dateKeeper.textContent = dateInput.value;

  renderUI(calcDaysLeft(dateInput.value));
  localStorageFN("date", dateKeeper.textContent);
};

dateInput.addEventListener("change", getAorDate);
