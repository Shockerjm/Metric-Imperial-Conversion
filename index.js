/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.querySelector("#conversion-input")
const btn = document.querySelector(".btn")
const meterFeet = document.querySelector("#meter-feet-conversion")
const literGallon = document.querySelector("#liter-gallon-conversion")
const kiloPound = document.querySelector("#kilo-pound-conversion")
let text = ""

function convertMeterFeet(value) {
    let meters = value * 3.281
    let feet = value / 3.281
    text = `${value} meters = ${meters.toFixed(3)} feet | ${value} feet = ${feet.toFixed(3)} meeters`
    meterFeet.textContent = text;
}

function convertLiterGallon(value) {
    let liters = value * 0.264
    let gallons = value / 0.264
    text = `${value} liters = ${liters.toFixed(3)} gallons | ${value} gallons = ${gallons.toFixed(3)} liters`
    literGallon.textContent = text
}

function convertKiloPound(value) {
    let kilos = value * 2.204
    let pounds = value / 2.204
    text = `${value} kilos = ${kilos.toFixed(3)} pounds | ${value} pounds = ${pounds.toFixed(3)} kilos`
    kiloPound.textContent = text
}

function conversions() {
    convertMeterFeet(input.value)
    convertLiterGallon(input.value)
    convertKiloPound(input.value)
    input.value = ""
}

input.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
        conversions()
    }
})

btn.addEventListener('click', function() {
    conversions()
})