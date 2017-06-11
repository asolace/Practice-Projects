def reverser
    yield.split(' ')
    .map!{ |word| word.reverse}
    .join(' ')
end

def adder(n = 1)
  n + yield
end

def repeater(n = 1)
  n.times { yield }
end

# or

# def reverser (&block)
#     parts = block.call.split
#     parts = parts.map do |word|
#         word.split('').reverse.join
#     end
#     parts.join(' ')
# end

# def adder (n=1, &block)
#     n + block.call
# end

# def repeater (n=1, &block)
#     n.times { block.call }
# end
