require_relative './data_structures.rb'
require 'set'

class KnightPathFinder

  def self.valid_moves(pos)
    my_x, my_y = pos
    potentials = []
    (my_x - 2..my_x + 2).each { |x| (my_y - 2..my_y + 2)
                        .each { |y| potentials << [x, y] } }
    select_valids(potentials, my_x, my_y)
  end

  def self.select_valids(potentials, x, y)
    potentials.select do |xy|
      xy[0].between?(0, 7) && xy[1].between?(0, 7) && # is it overflowing the board?
      (x - xy[0]).abs < 3 && (y - xy[1]).abs < 3 && # can't move 3 in a straight line
      (x - xy[0]).abs + (y - xy[1]).abs == 3 # but must move 3 steps
    end
  end

  def initialize(starting_pos = [0,0])
    @starting_pos = [0, 0]
    @starting_pos = starting_pos if starting_pos[0].between?(0, 7) &&
                             starting_pos[1].between?(0, 7)
    @visited_positions = Set.new << @starting_pos
  end

  def build_move_tree
    root = PolyTreeNode.new(@starting_pos)
    queue = [root]
    until queue.empty?
      current = queue.shift
      children = new_move_positions(current.value)

      children.map! do |child|
        nodechild = PolyTreeNode.new(child)
        current.add_child(nodechild)
        nodechild
      end
      queue += children
    end
    root
  end

  def find_path(end_pos)
    root = build_move_tree
    dest = root.bfs(end_pos)
    dest.trace_path_back
  end

  def new_move_positions(pos)
    valid_moves = self.class.valid_moves(pos)
    new_moves = []
    valid_moves.each do |move|
      unless @visited_positions.include?(move)
        @visited_positions << move
        new_moves << move
      end
    end
    new_moves
  end
end
