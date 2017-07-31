# Xbonacci
# ------------------------------------------------------------------------------
# Write a Xbonacci function that works similarly to the fibonacci sequence.
# The fibonacci sequence takes the last two numbers in the sequence and adds
# them together to create the next number.
#
# First five fibonacci numbers = [1, 1, 2, 3, 5]
# The fourth fibonacci number (3) is the sum of the two numbers before it
# (1 and 2).
#
# In Xbonacci, the sum of the last X numbers (instead of the last 2 numbers)
# of the sequence becomes the next number in the sequence.
#
# The method will take two in#: the starting sequence with X number of
# elements and an integer N, and return the first N elements in the given
# sequence.  Take a look at the test cases for examples.
#
# In the code, how_many_numbers_to_sum is the same as X (name your variables
# descriptively!).
#
# In the code, number_of_fibonacci_numbers_to_return is the same as N.


p xbonacci([1, 1], 5) => [1, 1, 2, 3, 5]
p xbonacci([1, 1, 1], 6) => [1, 1, 1, 3, 5, 9]
p xbonacci([1, 1, 1, 1], 8) => [1, 1, 1, 1, 4, 7, 13, 25]
p xbonacci([1, 1, 1, 1, 1, 1], 10) => [1, 1, 1, 1, 1, 1, 6, 11, 21, 41]
p xbonacci([0, 0, 0, 0, 1], 10) => [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]
