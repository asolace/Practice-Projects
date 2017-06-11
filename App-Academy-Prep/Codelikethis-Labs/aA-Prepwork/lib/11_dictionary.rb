class Dictionary
  attr_accessor :entries

  def initialize(entries = {})
    @entries = entries
  end

  def add(h)
    h.is_a?(Hash) ? @entries.merge!(h) : @entries[h] = nil
  end

  def keywords
    @entries.keys.sort!
  end

  def include?(key)
    @entries.key?(key)
  end

  def find(key)
    @entries.select {|k| k[key] } # k[key] fi* kee kee
  end

  def printable
    result = ""
    keywords.each { |key| result += "[#{key}] \"#{@entries[key]}\"\n"}
    result.chomp
  end
end
