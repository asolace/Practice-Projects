function longestLetterStreak(str, searchLetters) {
  let lStreak = 0, temp = 0
  for (var i = 0; i < str.length; i++) {
    if (searchLetters.includes(str[i])) {
      temp++
    } else if (!searchLetters.includes(str[i])) {
      if (temp > lStreak) {
        lStreak = temp
        temp = 0
      }
    }
  }
}

longestLetterStreak("ACCA", ["C"]) => 2
longestLetterStreak("YACCADCA", ["C", "A"]) => 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]) => 3
longestLetterStreak("YYYYY", ["Z", "K", "Y"]) => 5
