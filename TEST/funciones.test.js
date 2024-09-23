const { average, sum } = require("./funciones.js")
 
test('la suma de 1 y 2 debe ser 3', () => {
    expect(sum(1, 2)).toBe(3)
})
 
test('la suma de 1.5 y 2.5 debe ser 4', () => {
    expect(sum(1.5, 2.5)).toBe(4)
})
 
test('el promedio entre 1 y 3 es 2 ', () =>{
    expect(average(1,3)).toBe(2)
})
