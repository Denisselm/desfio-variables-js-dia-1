// ingresar dias para convertor
let totalDiasString = prompt("ingrese cantidad de dias");
let totalDiasNumeros = parseInt(totalDiasString);

//operaciones matemáticas para convertir días
let anios = Math.floor(totalDiasNumeros / 365);
let semanas = Math.floor((totalDiasNumeros % 365) / 7);
let dias = Math.floor((totalDiasNumeros % 365) % 7);

//mostrar mensaje en consola
console.log(` ${anios} años, ${semanas} semanas, ${dias} dias `);