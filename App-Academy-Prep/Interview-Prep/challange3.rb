def combine_arrays(arr1, arr2)
  result = []
  i = 0
  while i < arr1.length
    if arr1[i] < arr2[i]
      result << arr1[i]
      result << arr2[i]
    else
      result << arr2[i]
      result << arr1[i]
    end
    i += 1
  end
  result
end

combine_arrays([1, 3, 5], [2, 4, 6])

def puppy_golden_age(arr)
  golden = 0
  result = nil
  i = 0
  while i < arr.length
    j = i + 1
    while j < arr.length
      if arr[i..j].reduce(:+) > golden
        golden = arr[i..j].reduce(:+)
        result = [i, j]
      end
      j += 1
    end
    i += 1
  end
  result
end

puppy_golden_age([100, -101, 200, -3, 1000]) == [2, 4]
puppy_golden_age([5, 3, -5, 1, 19, 2, -4]) == [0, 5]


def subsets(arr)
  result = [[]]
  i = 0
  while i < arr.length
    j = 0
    while j < arr.length
      if !result.include?arr[i..j]
        result << arr[i..j]
      end
      j += 1
    end
    i += 1
  end
  result
end

subsets(["a", "b", "c"]) == [
[], # note that the empty set counts!
["a"], ["a", "b"], ["a", "b", "c"], ["a", "c"],
["b"], ["b", "c"],
["c"]
]





#### Next Prime ####
# Given an array of numbers, replace each prime number in the array with
# the next prime number, e.g. 7 is replaced by 11.
#
# Constraint: You may not use a library to find prime numbers.
#
# examples:
# next_prime([11,13,17]) #=> [13, 17, 19]
# next_prime([4,6,8,10]) #=> [4, 6, 8 ,10]
# next_prime([2,5,4,7]) #=> [3,7,4,11]

def isPrime?(num)
  if num <= 1
    return false
  end

  i = 2
  while i < num
    if (num % i) == 0
      return false
    end
    i += 1
  end

  return true
end

def next_prime(arr)
  arr.map! do |n|
    if !isPrime?(n)
      n
    else
      n += 1
      while !isPrime?(n)
        n += 1
      end
      n
    end
  end
  arr
end

# p next_prime([11,13,17]) #=> [13, 17, 19]
# p next_prime([4,6,8,10]) #=> [4, 6, 8 ,10]
# p next_prime([2,5,4,7]) #=> [3,7,4,11]


### Cats 'n Hats ###
# You have 100 cats (you are quite lucky to own so many cats!).

# You have arranged all your cats in a line. Initially, none of your cats
# have any hats. You take 100 rounds walking around the cats, always starting
# at the beginning. Every time you stop at a cat, you put a hat on it if it
# doesn't have one, and you take its hat off if it has one on.

# The first round, you stop at every cat. The second round, you only stop at
# every 2nd cat (#2, #4, #6, #8, etc.). The third round, you only stop at
# every 3rd cat (#3, #6, #9, #12, etc.). You continue this process until the
# 100th round (i.e. you only visit the 100th cat).

# Write a program that prints which cats have hats at the end.

def catnHat
  cats = Hash.new()

  (1..100).each do |n|
    cats[n] = false
  end

  i = 1
  while i <= 100
    cats.each do |k, v|
      if k % i == 0
        cats[k] = !cats[k]
      end
    end
    i += 1
  end

  result = []
  cats.each do |k, v|
    result << k if cats[k]
  end
  result
end


catnHat
#### Decode ####
# You are given an encoded string. The code is defined as follows:
# * Each character in the encoded string is followed by a single-digit number.
# * The number represents how many times the character appears in a row.
#
# Write a function that takes in an encoded string and returns the original.
#
# Example:
# encoded_string = "m1i1s2i1s2i1p2i1"
# decoded_string = decode(encoded_string)
# decoded_string # => "mississippi"

def decoded(string)
  result = []
  int = []
  str = []

  string.chars.each_with_index do |c, i|
    i % 2 == 0 ? str << c : int << c.to_i
  end

  i = 0
  while i < str.length
    result << (str[i] * int[i])
    i += 1
  end
  result.join('')
end

encoded_string = "m1i1s2i1s2i1p2i1"
decoded_string = decoded(encoded_string)
decoded_string # => "mississippi"

# The time limit is 15 minutes
# We don't care about the efficiency of your solution
# Please ask me questions instead of looking it up or running code on
# your machine
# Please tell me your plan of attack after you've had a chance to read
# the question and think about it for a while


# Write a method that takes an array of stock prices (prices on days
# 0, 1, ...), and outputs the most profitable pair of days on which to
# first buy the stock and then sell the stock,
# e.g.: stock_picker( [ 44, 30, 24, 32, 35, 30, 40, 38 ] ) == [ 2, 6 ]

def stock_picker(arr)
  max = 0
  result = nil

  i = 0
  while i < arr.length
    j = i + 1
    while j < arr.length
      total = arr[j] - arr[i]
      if total > max
        max = total
        result = [i, j]
      end
      j += 1
    end
    i += 1
  end

  p result
end

stock_picker([44, 30, 24, 32, 35, 30, 40, 38])
