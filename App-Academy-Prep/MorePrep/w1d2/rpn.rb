class Rpn
  OPERATIONS = %w(+ - / *)

  def initialize
    @stack = []
  end

  def push(input)
    @stack << input
    evaluate
  end

  def exec(input)
    input = OPERATIONS.include?(input) ? input.to_sym : Float(input)
    push(input)
  end

  def evaluate
    return if @stack.last.is_a?(Numeric)

    operator = @stack.pop
    el1, el2 = @stack.pop, @stack.pop
    @stack << el2.send(operator, el1)
  end

  def cmd_input
    puts "Enter input"
    input = gets.chomp
    exec(input)

    cmd_input
  end

  def to_s
    @stack.last.to_s
  end
end

if $PROGRAM_NAME == __FILE__
  calculator = Rpn.new
  filename = ARGV[0]
  if filename
    File.read(filename).split.each { |arg| calculator.exec arg }
    puts calculator
  else
    calculator.cmd_input
  end
end
