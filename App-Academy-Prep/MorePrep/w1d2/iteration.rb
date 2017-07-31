def factors(num)
  (1..num).select { |i| num % i == 0 }
end

def bubblesort(arr)
  (arr.length - 1).times do |i|
    (arr.length - 1).times do
      arr[i], arr[i+1] = arr[i+1], arr[i] if arr[i] > arr[i+1]
    end
  end
  arr
end
=begin
Write a method substrings that will take a String and return an array containing each of its substrings. Don't repeat substrings. Example output: substrings("cat") => ["c", "ca", "cat", "a", "at", "t"].
Your substrings method returns many strings that are not true English words. Let's write a new method, subwords which will call substrings, but then filter it and return just the English words.
To do this, we'll need a dictionary, you can download one here. Click the 'Raw' button, and then save the file.
Learn how to read a file here.
You may need to use String#chomp to strip newline characters; see the Input/Output chapter for details.
=end

def substring(str)
  substrs = []
  str.length.times do |i|
    substrs.concat(str.chars.combination(i+1).to_a.map(&:join))
  end
  substrs
end

def subwords(str)
  substrs = substring(str)
  dict = File.readlines("dictionary.txt")
  substrs.select { |substr| dict.include?(substr + "\n") }.map(&:chomp)
end
