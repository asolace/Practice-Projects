# chunk an array into nested arrays of length n
def chunk(array, n)
  chunk = Array.new
  result = Array.new
  array.each do |a|
    if chunk.length == n
      result << chunk
      chunk = []
    end
    chunk << a
  end
  result << chunk
end

puts "---------chunk-------"
puts chunk([1, 8, 9, 4, "hey", "there"], 2) == [[1, 8], [9, 4], ["hey", "there"]]
puts chunk([10, 9, 8, 7, 6, 5, 4], 3) == [[10, 9, 8], [7, 6, 5], [4]]

# Translate into pig-latin! First consonants go to the end of a word.
# End with "ay"
def consChanger(word)
  vowel = 'aeiou'
  i = 0
  until vowel.include?(word[i])
    i += 1
  end
  first = word.slice(0, i)
  word = word.slice(i, word.length) + first + 'ay'
end

def pig_latin(sentence)
  words = sentence.split
  vowel = 'aeiou'
  sent = Array.new
  words.each do |word|
    if !vowel.include?(word[0])
      sent << consChanger(word)
    else
      sent << word + 'ay'
    end
  end
  sent.join(' ')
end

puts "---------pig latin-------"
puts pig_latin("i speak pig latin") == "iay eakspay igpay atinlay"
puts pig_latin("throw me an aardvark") == "owthray emay anay aardvarkay"

# Remove the nth letter of the string
def remove_nth_letter(string, n)
  string[0...n] + string[n + 1..-1]
end

puts "---------remove nth letter-------"
puts remove_nth_letter("helloworld", 5) == "helloorld"
puts remove_nth_letter("helloworld", -3) == "hellowold"

# Boolean function: check if short_string is a substring of long_string
def substring?(long_string, short_string)
  long_string.include?(short_string) ? true : false
end

puts "---------substring-------"
puts substring?("thisisaverylongstring", "sisa") == true
puts substring?("thisisaverylongstring", "ting") == false
puts substring?("whatifikeptontypingforever", "ik") == true

# count the number of times that two adjacent numbers in an array add up to n.
# You cannot reuse a number. So count_adjacent_sums([1, 5, 1], 6) => 1

def count_adjacent_sums(array, n)
  counter = 0
  i = 0
  while i < array.length - 1
    if array[i] + array[i + 1] == n
      counter += 1
      i += 1
    end
    i += 1
  end
  counter
end

puts "---------count adjacent sums-------"
puts count_adjacent_sums([7, 2, 4, 6, 8, 10], 7) == 0
puts count_adjacent_sums([6, 7, 11, 2, 5, 10, 3], 13) == 3
puts count_adjacent_sums([1, 9, 1, 8, 2, 10], 10) == 2

# update the older inventory with the newer inventory.
# Add any new items to the
# hash and replace the values for items that already exist.

def inventory_hash(older, newer)
  newer.each do |k, v|
    older[k] = v
  end
  older
end

puts "---------inventory hash-------"
march = {rubies: 10, emeralds: 14, diamonds: 2}
april = {emeralds: 27, moonstones: 5}
puts inventory_hash(march, april) == {rubies: 10, emeralds: 27, diamonds: 2, moonstones: 5}

# Now, alphabetical order matters in your inventory.
# Insert new inventory items into
# your array in the appropriate place
def inventory_array(older, newer)
  newer.each do |item|
    name, ammount = item
    older.reject! { |olditem| olditem[0] == name }
    older << item
  end
  older.sort { |itema, itemb| itema[0] <=> itemb[0] }
end

puts "---------inventory array-------"
march_array = [['diamonds', 2], ['emeralds', 14], ['rubies', 10]]
april_array = [['emeralds', 27], ['moonstones', 5]]
puts inventory_array(march_array, april_array) == [['diamonds', 2], ['emeralds', 27], ['moonstones', 5], ['rubies', 10]]
