require 'byebug'

class PolyTreeNode
  attr_reader :parent, :children, :value

  def initialize(value = nil)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(parent)
    @parent.children.delete(self) if @parent
    @parent = parent
    parent.children << self if parent
  end

  def add_child(child)
    child.parent = self
  end

  def remove_child(child)
    raise "Error" unless @children.include?(child)
    child.parent = nil
  end

  def dfs(target_value)
    return self if @value == target_value
    @children.each do |child|
      search_child = child.dfs(target_value)
      return search_child if search_child
    end
    nil
  end

  def bfs(target_value)
    queue = [self]
    until queue.empty?

      if queue.first.value == target_value
        return queue.first
      else
        queue += queue.shift.children
      end
    end
    nil
  end

  def trace_path_back
    path = []
    current = self
    while current.parent
      path << current.value
      current = current.parent
    end
    path << current.value
    path.reverse!
  end

end
