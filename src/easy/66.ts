function plusOne(digits: number[]): number[] {
  let idx = digits.length - 1;

  if (digits[idx] !== 9) {
    digits[idx] += 1;
    return digits;
  }

  let lastItem = digits[idx];
  while (lastItem === 9 && idx !== 0) {
    digits[idx] = 0;
    idx -= 1;
    lastItem = digits[idx];
  }

  if (digits[idx] !== 9) {
    digits[idx] += 1;
  }
  else {
    digits[idx] = 0;
    digits.unshift(1)
  }

  return digits;
}