
# Write a method that takes an array of words and returns only the words
# that are anagrams of a given string.

def anagrams(string, array)
  stringSort = string.chars.sort.join('')
  array.select do |w|
    stringSort == w.chars.sort.join('')
  end
end

#Tests
puts "\nAnagrams:\n" + "*" * 15 + "\n"
puts anagrams("cat", ["cat"]) == ["cat"]
words = ["cat", "act", "bat", "tac"]
puts anagrams("tca", words) == ["cat", "act", "tac"]
words = ["aaa", "aa", "a"]
puts anagrams("aa", words) == ["aa"]

# ************************************
# Write a boolean function that returns true if the vowels in a given
# word appear in order

def ordered_vowel_word?(word)
  vowels = 'aeiou'
  selVowel = word.chars.select { |v| v =~ /[aeiou]/}
  selVowel == selVowel.sort
end

#Tests
puts "\nOrdered Vowel Word:\n" + "*" * 15 + "\n"
puts ordered_vowel_word?("car") == true
puts ordered_vowel_word?("academy") == true
puts ordered_vowel_word?("programmer") == false
puts ordered_vowel_word?("grapefruit") == false

# ************************************
# Write a function that takes an array of words and returns the words
# whose vowels appear in order

def ordered_vowels(words)
  words.select do |word|
    ordered_vowel_word?(word)
  end
end

puts "\nOrdered Vowels:\n" + "*" * 15 + "\n"
puts ordered_vowels(["are"]) == ["are"]
puts ordered_vowels(["era", "are", "ear"]) == ["are"]
puts ordered_vowels(["hey", "wassup", "hello"]) == ["hey", "wassup", "hello"]
puts ordered_vowels(["firefox", "chrome", "safari", "netscape", "aeiou"]) == ["safari", "aeiou"]

# ************************************
# Write a function that takes two years and returns all the years within
# that range with no repeated digits.
# Hint: helper method?
# no_repeat_years(2010,2015) -> [2013,2014,2015]
def repeats?(year)
  year_s = year.to_s.chars
  year_s == year_s.uniq
end

def no_repeat_years(first_year, last_year)
  (first_year..last_year).to_a.select do |year|
    repeats?(year)
  end
end

puts "\nNo Repeat Years:\n" + "*" * 15 + "\n"
puts no_repeat_years(1990, 2000) == []
puts no_repeat_years(1900,1902) == [1902]
puts no_repeat_years(2016, 2020) == [2016, 2017, 2018, 2019]


# ************************************
# Write a method that takes a string of lower case words (no punctuation)
# and returns the letter that occurs most frequently.
# Use a hash within your method to keep track of the letter counts.
# You will need to account for spaces.
# There are a few ways you can do this.

def most_frequent_letter(string)
  str = string.chars
  h = Hash.new(0)
  str.reject! { |l| l == " "}
  str.each do |e|
    h[e] += 1
  end
  freq_letter = h.keys.first
  h.each do |letter, count|
    if count > h[freq_letter]
      freq_letter = letter
    end
  end
  freq_letter
end

puts "\nMost Frequent Letter\n" + "*" * 15 + "\n"
puts most_frequent_letter("aaaaa") == "a"
puts most_frequent_letter("aaaaabbbbbb") == "b"
puts most_frequent_letter("we the people in order to form a more perfect union") == "e"


# ************************************
# Write a method that takes a string of lower case words (no punctuation)
# and returns an array of letters that occur more
# than once.  We'll need to account for spaces, too.
# Again, there are a few ways you can do this.

def non_unique_letters(string)
  str = string.chars
  h = Hash.new(0)
  str.reject! { |o| o == ' '}
  str.each do |l|
    h[l] += 1
  end
  arr = Array.new
  h.each do |k, e|
    arr << k if e > 1
  end
  arr
end

puts "\nNon-Unique Letters\n" + "*" * 15 + "\n"
puts non_unique_letters("abbbcdddde") == ["b", "d"]
puts non_unique_letters("abcde") == []
puts non_unique_letters("aabbccddee") == ["a", "b", "c", "d", "e"]
puts non_unique_letters("aaa bbb c d eee") == ["a", "b", "e"]

# ************************************
# Write a method that takes a string of lower case words and returns
# an array of letters that do not occur in the string.

# This problem requires a different approach from the one we used in
# most_frequent_letter and we will need to show some care
# in how we set up the hash or process it to get the result.

# Do you see why?
# We'll need to account for spaces, too.
# Again, there are a few ways you can do this.

def missing_letters(string)
  alphabet = Hash.new(0)
  ('a'..'z').each {|e| alphabet[e] = 0 }
  string.each_char { |c| alphabet[c] += 1 unless c == ' ' }
  arr = Array.new
  alphabet.each {|a, i| arr << a if i == 0}
  arr
end

puts "\nMissing Letters\n" + "*" * 15 + "\n"
puts missing_letters("abcdefghijklmnopqrstuvwxyz") == []
puts missing_letters("abcdefghiklmnopqrstuvwxyz") == ["j"]
puts missing_letters("abcdefghiklmnopstuvwxyz") == ["j", "q", "r"]

#write a function primes that an argument n and returns the first n primes
def isPrime?(num)
  return false if num <= 1
  i = 2
  while i < num
    if num % i == 0
      return false
    end
    i += 1
  end
  return true
end
def primes(n)
  arr = Array.new
  i = 0
  while arr.length < n
    arr << i if isPrime?(i)
    i += 1
  end
  arr
end

puts "\nPrimes:\n" + "*" * 15 + "\n"
puts primes(0) == []
puts primes(1) == [2]
puts primes(2) == [2,3]
puts primes(6) == [2,3,5,7,11,13]

#write a boolean function zero_sum? that takes an array of integers and
# returns true if 2 elements in the array sum to zero.

# NOTE: For this question, do the "write out the variables" exercise from
# part 4 after you've written a first draft.

def zero_sum?(array)
  i = 0
  while i < array.length
    j = i + 1
    while j < array.length
      return true if (array[i] + array[j] == 0)
      j += 1
    end
    i += 1
  end
  false
end

puts "\nZero Sum:\n" + "*" * 15 + "\n"
puts zero_sum?([1, -1]) == true
puts zero_sum?([1,1,0,2,1]) == false
puts zero_sum?([1,1,0,2,1,0]) == true
puts zero_sum?([2,3,4,-3,1]) == true

#write a function largest_sum_pair that takes an array of intergers and
# returns the 2 unique indices whose elements sum to the largest number.
# Formatted [earlier_index, later_index]

# NOTE: For this question, do the "write out the variables" exercise from
# part 4 after you've written a first draft.

def largest_sum_pair(array)
  lsp = [0, 1]
  lspSum = array[0] + array[1]
  i = 0
  while i < array.length
    j = i + 1
    while j < array.length
      if array[i] + array[j] > lspSum
        lspSum = array[i] + array[j]
        lsp = [i, j]
      end
      j += 1
    end
    i +=  1
  end
  lsp
end

puts "\nLargest Sum Pair:\n" + "*" * 15 + "\n"
puts largest_sum_pair([1,2,3,4,5]) == [3,4]
puts largest_sum_pair([3,2,1,0,1,2,3]) == [0,6]
puts largest_sum_pair([-2,-1,-1,-2,-3]) == [1,2]
