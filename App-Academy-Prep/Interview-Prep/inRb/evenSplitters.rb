# Even Splitters
# ------------------------------------------------------------------------------
# Return an array of characters on which we can split an input string to produce
# substrings of the same length.
# Don't count empty strings after the split.
# Here's an example for "banana":
#
# "banana".split("a") # => ["b", "n", "n"] (all elements same length)
# "banana".split("b") # => ["", anana"] (all elements same length - there's only
# one element "anana" because the empty string doesn't count)
# "banana".split("n") # => ["ba", "a", "a"] (all elements NOT same length)
#
# result: ["b", "a"]
# ------------------------------------------------------------------------------

p evenSplitters("") => []
p evenSplitters("t") => ["t"]
p evenSplitters("jk") => ["j", "k"]
p evenSplitters("xoxo") => ["x", "o"]
p evenSplitters("banana") => ["b","a"]
p evenSplitters("mishmash") => ["m","h"]
