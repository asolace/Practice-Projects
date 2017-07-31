# Cupcake Solver
# ------------------------------------------------------------------------------
# It's Jennifer's birthday today. Jennifer's mom decided to bake different kinds
# of cupcakes for Jennifer's first grade class.  Everybody needs to have an equal
# amount of the different kinds of cupcakes.
# Write a method that takes an array of the counts of the different kinds of
# cupcakes and the number of students in the class, and returns
# the total number of cupcakes that each student in the class
# should get.
# Every student should have equal amounts of the same kind of cupcake.
# No student gets to have more cupcakes than the others.  There can be leftover
# cupcakes.
# An array of [1, 2, 3] means that there's one red velvet cupcake,
# two vanilla cupcakes, and three chocolate cupcakes.
# Example: cupcakeSolver([10, 10, 10], 5) => 6  means that there are five
# students in the class, and each student gets to eat six cupcakes, total.
def cupcakeSolver(ary, n)
  sum = 0
  ary.each { |x|  sum += (x / n).floor}
  return sum
end
p cupcakeSolver([10, 10, 10], 5) => 6
p cupcakeSolver([25, 27, 30], 5) => 16
p cupcakeSolver([32, 27, 28], 20) => 3
p cupcakeSolver([32, 27, 28, 24], 20) => 4
