# Word With Most Repeats
# ------------------------------------------------------------------------------
# Given a sentence, find which word has the greatest amount of repeated letters.
#
# For example, "I took the road less traveled and that has made all the difference"
# should return "difference" because it has two repeated letters (f and e).
#
# All words will be separated by spaces and there will be no punctuation or
# capitalization.  If there is a tie return the first word.  It doesn't matter
# how many times individual letters repeat, just that they repeat (see the third test
# case).
def letterCounter(word)
  seen = Array.new
  counted = Array.new
  counter = 0
  word.each_char do |c|
    if seen.include?(c) && !counted.include?(c)
      counter += 1
      counted.push(c)
    else
      seen.push(c)
    end
  end
  return counter
end

def wordWithMostRepeats(str)
  words = str.split(' ')
  mlc = 0
  ml = ''
  words.each do |word|
    if letterCounter(word) > mlc
      mlc = letterCounter(word)
      ml = word
    end
  end
  return ml
end

p wordWithMostRepeats('good luck') => 'good'
p wordWithMostRepeats('what if there is a tie betwixt words') => 'there'
p wordWithMostRepeats('ooooooooooh tutu') => 'tutu'
