let gradosCelsius = prompt('ingrese la temperatura en grados celsius');
console.log(gradosCelsius);

//variable resultado suma
let gradosFarenheit = parseInt(gradosCelsius * 9 / 5) + 32;
console.log(gradosFarenheit);
let gradosKelvin = parseInt(gradosCelsius + 273.15)
console.log(gradosKelvin);