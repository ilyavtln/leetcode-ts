function isPalindrome(x: number): boolean {
  const strVal = x.toString();
  let backStr = '';

  for (let i = strVal.length - 1; i >= 0; i--) {
    backStr += strVal[i];
  }

  return backStr === strVal;
}
