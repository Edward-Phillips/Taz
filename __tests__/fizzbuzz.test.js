const fizzbuzz = require("./../src/fizzbuzz");

test("is a function", () => {
  expect(typeof fizzbuzz).toBe("function");
});

test('fizzbuzz returns 1 when given 1', () => {
  const input = 1;
  expect(fizzbuzz(input)).toBe(1);
})

test('fizzbuzz returns 2 when given 2', () => {
  const input = 2;
  expect(fizzbuzz(input)).toBe(2);
})

test('fizzbuzz returns fizz when given 3', () => {
  const input = 3;
  expect(fizzbuzz(input)).toBe("fizz")
})
test('fizzbuzz returns fizz when given 4', () => {
  const input = 4;
  expect(fizzbuzz(input)).toBe(4);
})

test('fizzbuzz returns buzz when given 5', () => {
  const input = 5;
  expect(fizzbuzz(input)).toBe("buzz")
})

test('fizzbuzz returns fizzbuzz when given 15', () => {
  const input = 15;
  expect(fizzbuzz(input)).toBe("fizzbuzz");
})

test('fizzbuzz returns fizz when given 6', () => {
  const input = 6;
  expect(fizzbuzz(input)).toBe("fizz")
})

test('fizzbuzz returns buzz when given 5', () => {
  const input = 10;
  expect(fizzbuzz(input)).toBe("buzz")
})

test('fizzbuzz returns fizzbuzz when given 15', () => {
  const input = 45;
  expect(fizzbuzz(input)).toBe("fizzbuzz");
})