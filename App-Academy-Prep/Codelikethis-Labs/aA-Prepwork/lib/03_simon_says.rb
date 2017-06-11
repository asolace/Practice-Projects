def echo(str)
    str
end

def shout(str)
    str.upcase
end

def repeat(str, n = 2)
    arr = []
    until arr.length == n
        arr << str
    end
    arr.join(' ')
end

def start_of_word(str, i)
    str[0, i]
end

def first_word(str)
   str.split(' ')[0]
end

def titleize(str)
    little_words = ['the', 'and', 'over', 'a']
    words = str.split(' ')
    words.map!.with_index do |word, i|
        little_words.include?(word) && i != 0 ? word : word.capitalize
    end
    words.join(' ')
end
