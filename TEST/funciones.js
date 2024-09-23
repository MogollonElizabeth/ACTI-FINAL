function sum(a, b) {
    return a + b
  }
 
function average(a, b) {
  return (a + b) / 2
}
 
module.exports = { sum, average }
 
 
function calcularPromedio(...numeros) {
    const suma = numeros.reduce((total, num) => total + num, 0);
    const promedio = suma / numeros.length;
    return promedio;
}