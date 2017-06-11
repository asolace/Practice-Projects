class Temperature
  attr_accessor :in_fahrenheit, :in_celsius

  def initialize(arg)
    if arg[:f]
      @in_fahrenheit = arg[:f]
      @in_celsius = self.class.ftoc(arg[:f])
    else
      @in_celsius = arg[:c]
      @in_fahrenheit = self.class.ctof(arg[:c])
    end
  end

  def self.ftoc(fahrenheit)
    (fahrenheit - 32.0) * 5.0 / 9.0
  end

  def self.ctof(celsius)
    (celsius * 9.0 / 5.0) + 32.0
  end

  # Factory
  def self.from_celsius(celsius)
    new :c => celsius
  end

  def self.from_fahrenheit(fahrenheit)
    new :f => fahrenheit
  end

end

# Subclasses
# super takes from Parentclass
class Celsius < Temperature
  def initialize celsius
    super :c => celsius
  end
end

class Fahrenheit < Temperature
  def initialize fahrenheit
    super :f => fahrenheit
  end
end
