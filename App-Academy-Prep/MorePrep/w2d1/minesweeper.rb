require 'byebug'
require 'yaml'

class Game

  def self.load(file)
    YAML.load_file(file)
  end

  def initialize
    @game_over = false
  end

  def setup
    welcome
    size = get_board_size
    mines = get_mines_number
    @board = Board.new(size, mines)
    play
  end

  def play
    until @board.won? || @game_over
      input = get_input
      parse_input(input)
      render_grid
    end
    game_over_msg
  end

  def render_grid
    @board.rows.each_with_index do |row, x|
      line = []
      row.each_with_index { |tile, y| line << parse_tile(tile, x, y) }
      puts line.join("  ")
    end
  end


  private

  def parse_input(input)
    case input.first
    when "r" then @game_over = true unless @board.place?(input.drop(1))
    when "f" then @board.toggle_flag(input.drop(1))
    when "s" then save_game(input[1])
    end
  end

  def save_game(filename)
    File.open(filename, 'w') do |f|
      f.puts self.to_yaml
    end
  end

  def welcome
    puts "Welcome to Minesweeper!"
  end

  def get_board_size
    puts "How big of a grid do you want to play in?"
    puts "Enter a number:"
    size = Integer(gets.chomp)
  end

  def get_mines_number
    puts "How many mines do you want?"
    mines_number = Integer(gets.chomp)
  end

  def get_input
    puts "Enter in whether you want to Flag (f) or Reveal (r) a spot, or just "\
    "(s) if you want to save the game, and then your filename."
    puts "Format: \'f 4, 5\' or \'r 5, 7\' or \'s\ <filename>'"
    input = gets.chomp.downcase.split(',').join(' ').split

    validate_input(input)

  rescue
    puts "Invalid entry. Try again."
    retry
  end

  def validate_input(input)
    return ["s", input.last, nil] if input.first == "s"

    func, x, y = input

    raise InputError if input.length != 3 || (func != "r" && func != "f")
    x, y = Integer(x), Integer(y)

    !@board.valid_tile?([x, y]) ? raise InputError : [func, x, y]
  end

  def game_over_msg
    puts @board
    puts "\n\n"
    puts @game_over ? "You lost!" : "You won!"
  end

  def parse_tile(tile, x, y)
    case
    when @board.flags.include?([x,y]) then "F"
    when @board.shown.include?([x,y])
      tile.neighbors == 0 ? "." : tile.neighbors.to_s
    when tile.mine && @game_over then "X"
    else "_"
    end
  end
end

class Tile
  attr_accessor :neighbors, :mine, :visible
  def initialize
    @mine  = false
    @visible = false
    @neighbors = 0
  end

  def to_s
    @mine ? "@" : "_"
  end
end

class Board
  attr_accessor :flags, :shown, :rows
  FOUR_D_DIFFS = [-1, 0, 1, 0].zip([0, 1, 0, -1])

  def initialize(size = 9, mines_number = 9)
    @rows = Array.new(size) { Array.new(size) { Tile.new } }
    @flags = []
    @shown = []
    @num_mines = mines_number
    seed_board(@num_mines)
  end

  def [](x, y)
    @rows[x][y]
  end

  def []=(x, y, val)
    @rows[x][y] = val
  end

  def place?(coords)
    x, y = coords
    return false if self[x,y].mine
    @shown << [x,y] if splash(x,y) == []
    @shown.uniq!

    true
  end

  def toggle_flag(coords)
    case
    when @shown.include?(coords) then false
    when @flags.include?(coords) then @flags.delete(coords); true
    else @flags << coords; true
    end
  end

  def seed_board(mines_no)
    mines = []
    until mines.size == (mines_no)
      mines << [rand(@rows.size), rand(@rows.size)]
      mines.uniq!
    end
    mines.each { |x, y| self[x, y].mine = true }

    initialize_tiles
    self
  end

  def to_s
    string = ""
    @rows.each do |row|
      row.each do |mine|
        if mine.mine
          string += mine.to_s
        else
          string += mine.neighbors == 0 ? "." : mine.neighbors.to_s
        end
        string += "  "
      end
      string += "\n"
    end
    string
  end

  def won?
    @shown.count + @num_mines == @rows.length**2 && @flags.count == @num_mines
  end

  def valid_tile?(coord)
    x, y = coord
    x.between?(0, @rows.size - 1) && y.between?(0, @rows.size - 1)
  end

  def make_square(x, y)
    adjacents = []
    (x - 1..x + 1).each do |x|
      (y - 1..y + 1) .each do |y|
        adjacents << [x, y]
      end
    end
    adjacents.select! { |coords| valid_tile?(coords) && coords != [x, y] }
  end

 private

 def deep_dup(array)
   array.map { |el| el.is_a?(Array) ? deep_dup(el) : el }
 end

  def initialize_tiles
    @rows.each_with_index do |row, x|
      row.each_with_index do |tile, y|
        #check how many neighbors in a square around you have mines,
        #and increment their neighbor-mine count accordingly
        mines = make_square(x, y)
        mines.select! { |coords| self[*coords].mine }
        self[x, y].neighbors = mines.count
      end
    end
  end

  def splash(x, y)
    # only call splash if neighbor_bomb_count is 0

    # set a queue; put tile at x, y in there
    # reveal x,y

    # get current's neighbors
      # if they're not revealed, and their bomb_count is 0 add them to the queue
      # reveal them
    # stop once queue empty


    @shown << [x,y] if self[x,y].neighbors > 0 && !@shown.include?([x,y])
    return [] if @shown.include?([x,y])
    reveals = []
    FOUR_D_DIFFS.each do |dx, dy|
      if valid_tile?([x+dx, y+dy]) && !@shown.include?([x+dx, y+dy])
        p "#{[x + dx]} #{[y + dy]}"
        neighbor = [self[x+dx, y+dy], [x+dx, y+dy]]
        if !neighbor.first.mine
          reveals << neighbor
          @shown << [x, y]
        end
      end
    end

    reveals.each do |tneighbor|
      further_splash = splash(*tneighbor.last)
      @shown += further_splash.map(&:last) unless further_splash.empty?
      reveals += further_splash
    end
    reveals
  end
end

if __FILE__ == $0
  if ARGV[0]
    my_game = Game.load(ARGV.shift)
    my_game.play
  else
    Game.new.setup
  end
end
