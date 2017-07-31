function magicCipher(sentence, cipher){
  var nSent = "";
  for (var i = 0; i < sentence.length; i++) {
    nSent = cipher[sentence[i]] ?
    nSent += cipher[sentence[i]] :
    nSent += sentence[i]
  }
  return nSent;
}

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
