class RPNCalculator
  attr_accessor :calculator

  def initialize(calculator = [])
    @calculator = calculator
  end

  def push(n)
    @calculator << n
  end

  def value
    @calculator.last
  end

  def tokens(str)
    tokened = str.split(' ').map! do |e|
      !%w(+ - * /).include?(e) ? e.to_i : e.to_sym
    end
    tokened
  end

  def plus
    raise "calculator is empty" if calculator == []
    @calculator << @calculator.pop(2).reduce(:+)
  end

  def minus
    raise "calculator is empty" if calculator == []
    @calculator << @calculator.pop(2).reduce(:-)
  end

  def divide
    raise "calculator is empty" if calculator == []
    @calculator << @calculator.pop(2)
    .map(&:to_f).reduce(:/)
  end

  def times
    raise "calculator is empty" if calculator == []
    @calculator << @calculator.pop(2)
    .map(&:to_f).reduce(:*)
  end

  def evaluate(str)
    tokens(str).each do |x|
      case x
      when Fixnum
        push(x)
      when :+
        plus
      when :-
        minus
      when :*
        times
      when :/
        divide
      end
    end
    value
  end

end
