function vowelCheck(word) {
  let vowels = "aeiou";
  for (let i = 0; i < word.length; i++) {
    word = vowels.includes(word[i]) ? word.slice(0, i) + "*" + word.slice(i+1): word;
  }
  return word;
}

function censor(sentence, curseWords) {
  let words = sentence.split(' ');
  let nSent = [];

  words.forEach(word =>{
    curseWords.includes(word.toLowerCase()) ? nSent.push(vowelCheck(word)) : nSent.push(word)
  })
  return nSent.join(" ");
}


console.log(censor("Darn you Harold you son of a gun", ["darn", "gun"]));
//=> "D*rn you Harold you son of a g*n"
console.log(censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]))
//=> "Schn*k*ys I dont give a d*ddly sq**t"
console.log('\n');
