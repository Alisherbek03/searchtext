var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) {
      return words[i];
    }
  }

  return "Prefiks topilmadi";
};

const sentence = "I love eating burger";
const searchparam = "bur";

console.log(isPrefixOfWord(sentence, searchparam));
