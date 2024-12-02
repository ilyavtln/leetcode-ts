function isPrefixOfWord(sentence: string, searchWord: string): number {
  let sentences = sentence.split(" ");

  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].indexOf(searchWord) == 0) {
      return i + 1;
    }
  }

  return -1;
}