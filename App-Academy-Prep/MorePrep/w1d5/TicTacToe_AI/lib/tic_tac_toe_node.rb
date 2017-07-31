require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    our_mark = evaluator
    opponent = flip_sign(our_mark)
    return board.winner == opponent if board.over?

    childs = children
    if @next_mover_mark == our_mark
      childs.all?{ |child| child.losing_node?(our_mark) }
    else
      childs.any? { |child| child.winning_node?(opponent) }
    end
  end

  def winning_node?(evaluator)
    our_mark = evaluator
    opponent = flip_sign(our_mark)
    return board.winner == our_mark if board.over?

    childs = children
    if @next_mover_mark == our_mark
      childs.any?{ |child| child.winning_node?(our_mark) }
    else
      childs.all? { |child| child.winning_node?(our_mark) }
    end
  end

  def children
    all_moves = [0, 1, 2].permutation(2).to_a + [0, 1, 2].map { |n| [n, n] }
    children_array = []
    all_moves.each do |move|
      if board.empty?(move)
        nextboard = board.dup
        nextboard[move] = @next_mover_mark
        children_array << TicTacToeNode.new(nextboard,
                                            flip_sign(@next_mover_mark),
                                            move)
      end
    end
    children_array
  end

  def flip_sign(sign)
    sign == :x ? :o : :x
  end
end
