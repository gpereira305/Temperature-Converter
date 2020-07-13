// Seleciona o campo do conversor de Celsius > Fahrenheit > Kelvin
const celsiusInput = document.querySelector("#celsius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

//Tranforma números decimais em apenas 2 casas após o 0.
function roundNum(num) {
  return Math.round(num * 100) / 100;
}

// CONVERTE CELSIUS PARA FAHRENHEIT E KELVIN
function celsiusToFahrenheitToKelvin() {
  const celTemp = parseFloat(celsiusInput.value);
  const fahTemp = celTemp * (9 / 5) + 32;
  const kelTemp = celTemp + 273.15;
  fahrenheitInput.value = roundNum(fahTemp);
  kelvinInput.value = roundNum(kelTemp);
}

// CONVERTE FAHRENHEIT PARA CELSIUS E KELVIN
function fahrenheitToCelsiusToKelvin() {
  const fahTemp = parseFloat(fahrenheitInput.value);
  const celTemp = (fahTemp - 32) * (5 / 9);
  const kelTemp = ((fahTemp + 459.67) * 5) / 9;
  celsiusInput.value = roundNum(celTemp);
  kelvinInput.value = roundNum(kelTemp);
}

// CONVERTE KELVIN PARA CELSIUS E FAHRENHEIT
function kelvinToCelsiusToFahrenheit() {
  const kelTemp = parseFloat(kelvinInput.value);
  const celTemp = kelTemp - 273.15;
  const fahTemp = (9 / 5) * (kelTemp - 273) + 32;
  celsiusInput.value = roundNum(celTemp);
  fahrenheitInput.value = roundNum(fahTemp);
}

function listener() {
  // Ativa a conversão de Celsius para Fahrenheit > Kelvin > Fahrenheit
  celsiusInput.addEventListener("input", celsiusToFahrenheitToKelvin);
  fahrenheitInput.addEventListener("input", fahrenheitToCelsiusToKelvin);
  kelvinInput.addEventListener("input", kelvinToCelsiusToFahrenheit);
}

listener();

// LIMPAR DADOS DOS CAMPOS DE TEMPERATURA
let btnClear = document.querySelector("button");
let inputs = document.querySelectorAll("input");

btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});
