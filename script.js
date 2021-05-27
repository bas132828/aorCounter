'use strict'

const counter = document.querySelector(".counter");

const dateInput = document.getElementById('aor')

console.log(dateInput)

let aorDateInput = '';
let aorDay
const getAorDate = function() {
    aorDateInput = dateInput.value ;
    console.log(aorDateInput)
    aorDay = new Date(aorDateInput).getTime();
    const today = Date.now();

const difference = today - aorDay;
const daysGone = Math.floor(difference / 1000 / 60 / 60 / 24);
counter.textContent = daysGone;
counter.style.fontSize = `${daysGone}px`;
}

dateInput.addEventListener('change', getAorDate)
