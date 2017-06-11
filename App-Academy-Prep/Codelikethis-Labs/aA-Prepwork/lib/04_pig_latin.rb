# Main
def translate(str)
  vowels = %w[a e i o u A E I O U]
  punctuation = %[! . , ?]
  words = str.split(' ')

  words.map! do |word|
    if vowels.include?(word[0]) || word.length < 3 # For vowels and words like my
      word << 'ay'
    else # For consonants
      cons_word(word, vowels)
    end
  end

  # Time to check the puncuation case
  words.map! do |word|
    if word.chars.any?{|char| punctuation.include?(char)}
      punc_word(word, punctuation)
    else
      word
    end
  end
  words.join(' ')
end

# Helper: Consonant words
# - Capital, punctuation, qu's
def cons_word(word, vowels)
  word.chars.each_with_index do |char, i|
    if word.include?('qu') # Case for qu's
      return qu_word(word)
    else # All other consonants
      until vowels.include?(word[0])
        word = word[1, word.length - 1] << word[0]
      end
    end
  end

  word << 'ay'
  word.downcase! ? word.capitalize! : word # Recapitalize
end

#Helper: Qu words like quest & square
def qu_word(word)
  vowels = %w[a e i o]
  until vowels.include?(word[0])
    word = word[1, word.length - 1] << word[0]
  end
  word << 'ay'
end

# Helper: Edit Punctuation
def punc_word(word, punctuation)
  holder = ''
  word.chars.each_with_index do |char, i|
    if punctuation.include?(char)
      holder = char
      word[i] = ''
    end
  end
  word << holder
end
