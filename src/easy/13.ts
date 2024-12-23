function romanToInt(s: string): number {
  let sum = 0;

  const digits: { [key: string]: number } = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && digits[s[i]] < digits[s[i + 1]]) {
      sum -= digits[s[i]];
    } else {
      sum += digits[s[i]];
    }
  }

  return sum;
}