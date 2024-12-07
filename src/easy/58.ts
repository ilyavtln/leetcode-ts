function lengthOfLastWord(s: string): number {
  let words = s.trim().split(' ');
  console.log(words)
  return words[words.length - 1].length;
};
