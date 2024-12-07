function addBinary(a: string, b: string): string {
  let sum = parseInt(a, 2) + parseInt(b, 2);
  if (sum >= 0) {
    return sum.toString(2);
  } else {
    return (sum >>> 0).toString(2);
  }
}

console.log(addBinary("1010", "1011"));