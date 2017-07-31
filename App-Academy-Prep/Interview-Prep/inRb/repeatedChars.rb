# Write a function repeatedChars(word) which takes a string
# and returns an array of all the characters in word that
# appear in a streak (i.e. more than once consecutively).
# Case-sensitive.

def repeatedChars(word)
  final = []
  i = 0
  while i < word.length
    if word[i] == word[i + 1] && word[i + 1] != word[i + 2]
      final << word[i + 1]
    end
  i += 1
  end
final
end

p repeatedChars("aaaaabaa") => ["a", "a"]
p repeatedChars("mississippi") => ["s", "s", "p"]
p repeatedChars("SSassSS") => ["S", "s", "S"]
