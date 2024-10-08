const calculator = require('./calculator.js');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
}); 
  
test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.division(-5, -10)).toBe(0.5);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.division(10,5)).toBe(2);
});
test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.multielisa(10, 5)).toBe(50);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.multielisa(11, 5)).toBe(55);
}); 

test('subtract -5 - -10 to equal 5', () => {
  
  expect(calculator.division(10,0)).toBe(Infinity);
});

