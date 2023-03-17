// code for unit conversion in js?
const converter = {
  "mm": 0.001,
  "cm": 0.01,
  "m": 1,
  "km": 1000,
  "feet": 0.3048,
  "inch": 0.0254,
  "yard": 0.9144,
  "mile": 1609.34
};

const units = Object.keys(converter);

function convertAll(currentValue, currentunit) {
  units.forEach((unit) => {

    if (unit !== currentunit) {
      let input = document.getElementById(unit);
      input.value = Number(currentValue) * converter[unit] / converter[currentunit];

    }
  })
}

units.forEach((unit) => {

  let input = document.getElementById(unit);
  input.addEventListener("input", function(evt) {
    const Number = parseFloat(input.value);
    convertAll(evt.target.value, evt.target.id);
  })
})









//code for temperature converter
// function temperatureConverter1(valNum) {
//   valNum = parseFloat(valNum);
//   document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
// }

// function temperatureConverter2(valNum) {
//   valNum = parseFloat(valNum);
//   document.getElementById("outputFahrenheit").innerHTML = (valNum * 1.8) + 32;
// }









