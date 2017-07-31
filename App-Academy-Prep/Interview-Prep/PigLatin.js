function isVowel(word) {
  var vowel = "aeiou"
  return vowel.includes(word) ?  true :  false
}

function cons(word){
  for (var i = 0; i < word.length; i++) {
    if (isVowel(word[i])) {
      return word.slice(i) + word.slice(0, i)
    }
  }
  return word;
}

function inPigLatin(sentence){
  var words = sentence.split(" ");
  var nSent = [];
  words.forEach(word => { // or words.forEach(function(word))
    if (isVowel(word[0])) {
        nSent.push(word + "yay")
    } else if (word[0] === word[0].toUpperCase()) {
      var nWord = cons(word).toLowerCase()
      nSent.push(nWord.slice(0, 1).toUpperCase() + nWord.slice(1) + "ay" )
    } else {
      nSent.push(cons(word) + "ay")
    }
  })
  return nSent.join(" ")
}


> inPigLatin("Shmanthony is the best teacher")
Anthonyshmay isyay ethay estbay eachertay

> inPigLatin("let us Dance")
etlay usyay Anceday

> inPigLatin("this is the time of my life")
isthay isyay ethay imetay ofyay myay ifelay
