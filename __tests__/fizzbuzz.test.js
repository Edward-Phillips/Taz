const fizzbuzz = require("./../src/fizzbuzz");

test("is a function", () => {
  expect(typeof fizzbuzz).toBe("function");
});

test('fizzbuzz returns 1 when given 1', () => {
  const input = 1;
  expect(fizzbuzz(input)).toBe(1)
})