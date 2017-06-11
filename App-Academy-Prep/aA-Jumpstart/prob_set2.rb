# Write a function that takes in a number and
# sums all the numbers up to that number
def sum_to(number)
  return 0 if number == 0
  number += sum_to(number - 1)
end

# Test - these should all print out true!
puts "\nSum To:\n" + "*" * 15 + "\n"
puts sum_to(5) == 15
puts sum_to(3) == 6
puts sum_to(1) == 1
puts sum_to(0) == 0

# *********************************************

# Write a function that takes in an amount of minutes and
# returns a time string formatted HH:MM
def time_conversion(minutes)
  hr = 0
  while minutes >= 60
    hr += 1
    minutes -= 60
  end
  if minutes < 10
    minutes = "0" + minutes.to_s
  end
  if hr < 10
    hr = "0" + hr.to_s
  end
  hr.to_s + ":" + minutes.to_s
end

# Test - these should all print true!
puts "\nTime Conversion:\n" + "*" * 15 + "\n"
puts time_conversion(30) == "00:30"
puts time_conversion(60) == "01:00"
puts time_conversion(90) == "01:30"
puts time_conversion(120) == "02:00"
puts time_conversion(10) == "00:10"
puts time_conversion(5) == "00:05"
puts time_conversion(0) == "00:00"

# *********************************************
# Write a function that takes an array of pairs and returns the pair with
# the greatest sum
def sum(array)
  array[0] + array[1]
end

def largest_pair(pairs_array)
  lSum = (pairs_array[0][0] + pairs_array[0][1])
  lAry = [pairs_array[0][0], pairs_array[0][1]]
  pairs_array.each do |ary|
    if sum(ary) > lSum
      lSum = sum(ary)
      lAry = ary
    end
  end
  lAry
end

#Tests - Get all these to print true
puts "\nLargest Pair:\n" + "*" * 15 + "\n"
puts largest_pair([[1,0]]) == [1,0]
puts largest_pair([[1,0],[1,1],[1,2]]) == [1,2]
puts largest_pair([[-4,0],[-2,-1],[-3,2]]) == [-3,2]


# *********************************************

# Write a function that returns a phrase with each word
# (separated by spaces) capitalized.

def capitalize_each_word(phrase)
  word = phrase.split(' ')
  nSent = []
  word.each {|c| nSent << c.capitalize}
  nSent.join(' ')
end

#Get these to true!!
puts "\nCapitalize:\n" + "*" * 15 + "\n"
puts capitalize_each_word("abc") == "Abc"
puts capitalize_each_word("lets go dubs") == "Lets Go Dubs"
puts capitalize_each_word("CODE IS LIFE") == "Code Is Life"
dont_change_this = "do not mutate me"
capitalize_each_word(dont_change_this)
puts dont_change_this == "do not mutate me"

# *********************************************

# Write a boolean function that returns true if an array of
# numbers has any multiples of 3.
def has_multiple_of_three?(numbers)
  numbers.any? { |e| e % 3 == 0 }
end

#Tests - More trues
puts "\nHas multiples of three:\n" + "*" * 15 + "\n"
puts has_multiple_of_three?([1]) == false
puts has_multiple_of_three?([3]) == true
puts has_multiple_of_three?([1,2,4,5,7,8]) == false
puts has_multiple_of_three?([1,2,4,5,6,7,12]) == true

# *********************************************

#If you didn't use enumerable any? in has_multiple_of_three?
# write is again using any?

# *********************************************

# Write a function that take an array of numbers and returns a hash of
# the number of even numbers and of odd numbers.

def evens_and_odds(numbers)
  h = {'even' => 0, 'odd' => 0}
  numbers.each do |x|
    x % 2 == 0 ? h['even'] += 1 : h['odd'] += 1
  end
  h
end

#Test - Get these all true, look at the format of the return value
puts "\nEvens and odds:\n" + "*" * 15 + "\n"
puts evens_and_odds([1,3])['even'] ==  0
puts evens_and_odds([1,3])['odd'] ==  2

puts evens_and_odds([2,4])['even'] == 2
puts evens_and_odds([2,4])['odd'] == 0

puts evens_and_odds([]) == {'even' => 0, 'odd' => 0}
puts evens_and_odds([1,2,3]) == {'even' => 1, 'odd' => 2}

# *********************************************

# Write a function that takes in a word and returns the counts of
# each letter in that word.

def letter_counts(word)
  h = Hash.new
  word.each_char do |c|
    h[c] == nil ? h[c] = 1 : h[c] += 1
  end
  h
end

# Tests must all print true
puts "\nLetter Counts:\n" + "*" * 15 + "\n"
puts letter_counts("hi") == { 'h' => 1, 'i' => 1 }
puts letter_counts("hello") == { 'h' => 1, 'e' => 1 , 'l' => 2, 'o' => 1}

# *********************************************

# Take a moment and refactor your previous code to make it look sexy and
# use good coding style!

# *********************************************

# Write a boolean function palindrome? which takes in a word and returns
# true if it is palindrome.

def palindrome?(string)
  i = 0
  while i < string.length
    if string[i] != string[(string.length - 1) -i]
      return false
    end
    i += 1
  end
  true
end

#Tests
puts "\nPalindrome:\n" + "*" * 15 + "\n"
puts palindrome?("a") == true
puts palindrome?("aa") == true
puts palindrome?("ab") == false
puts palindrome?("racecar") == true
puts palindrome?("coder") == false

# *********************************************

# Write a function that will reverse the digits of a number.
def reverse_digits(number)
  nS = number.to_s
  newNum = ""
  i = 0
  while i < nS.length
    newNum = nS[i] + newNum
    i += 1
  end
  return newNum.to_i
end

#Tests
puts "\nReverse Digits:\n" + "*" * 15 + "\n"
puts reverse_digits(1) == 1
puts reverse_digits(12) == 21
puts reverse_digits(1738) == 8371

# *********************************************

# Write a function that returns the longest word in a sentence
def longest_word(phrase)
  word = phrase.split(' ')
  largestWord = ""
  word.each do |w|
    if w.length > largestWord.length
      largestWord = w
    end
  end
  return largestWord
end

# Tests - these should all print out true!
puts "\nLongest word:\n" + "*" * 15 + "\n"
puts longest_word("lets go warriors") == ("warriors")
puts longest_word("warriors are the best") == ("warriors")
puts longest_word("go steph go") == "steph"

# *********************************************

# Write a method that will take a list of names and return a hash of first
# initials and the number of times they appear.
def count_initials(names)
  h = Hash.new
  names.each do |l|
    firstl = l[0]
    h[firstl] == nil ? h[firstl] = 1 : h[firstl] += 1
  end
  h
end

#Tests
puts "\nCount Initials:\n" + "*" * 15 + "\n"
dubs = ["Steph", "Harrison", "Klay", "Andrew", "Andre", "Draymond", "Shaun"]
puts count_initials(dubs) == { "S" => 2, "H" => 1, "K" => 1, "D" => 1, "A" => 2 }

# *********************************************

# Write a function that takes an array of integers and uses each to
# calcuate their squares, returning them as an array.

# *********************************************

def compute_squares(array)
  array.map { |e| e**2 }
end

#Tests
puts "\ncompute squares"
puts compute_squares([]) == []
puts compute_squares([9]) == [81]
puts compute_squares([1, 2, 3, 4]) == [1, 4, 9, 16]
