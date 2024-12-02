function longestCommonPrefix(strs: string[]): string {
  let answer = "";
  let minLength = Math.min(...strs.map((str) => str.length));

  for (let i = 0; i < minLength; i++) {
    let char = strs[0][i];

    if(strs.every((str) => str[i] === char)) {
      answer += char;
    }
    else {
      return answer
    }
  }

  return answer
}