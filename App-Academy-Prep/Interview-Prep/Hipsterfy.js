function remover(word){
  var vowels = "aeiou";
  for (var i = word.length -1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return word.slice(0, i) + word.slice(i + 1)
    }
  }
}

function hipsterfy(sentence){
  var nSent = [];
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    nSent.push(remover(words[i]))
  }
  return nSent.join(" ")
}

** hipsterfy("proper") => "propr"
** hipsterfy("proper tonic panther") => "propr tonc panthr"
** hipsterfy("towel flicker banana") => "towl flickr banan"
** hipsterfy("runner anaconda") => "runnr anacond"
** hipsterfy("turtle cheeseburger fries") => "turtl cheeseburgr fris"
