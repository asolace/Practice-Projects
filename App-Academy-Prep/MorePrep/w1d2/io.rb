def guesser
  computer_number = rand(100) + 1
  guesses = 0
  loop do
    guesses += 1
    puts "Guess a number:"
    guess = Integer(gets)

    case
    when guess > computer_number then puts "Too high."
    when guess < computer_number then puts "Too low."
    else puts "Correct in #{guesses} guesses"; break
    end
  end
end

def fileshuffler
  puts "What's the filename?"
  filename = gets.chomp

  File.open('output.txt', 'w') do |f|
    f.puts(File.readlines(filename).shuffle)
  end
end
