class Book
  attr_accessor :title

  def title= title
    @title = title
    capitalize
  end

  def capitalize
    exceptions = %w(and in the of a an)
    words = @title.split(' ').map! do |word|
      exceptions.include?(word) ? word : word.capitalize
    end
    words = words.join(' ')
    words[0] = words[0].upcase
    @title = words
  end

end
