# Write a function inAllStrings(longStrings, shortString).
# Check if a shortString is a substring of ALL of the strings in longStrings.

def inAllStrings(longStrings, shortString)
	longStrings.each do |string| return true if string.include?(shortString)
	return false
	end
end

puts inAllStrings(["thisisaverylongstring", "thisisanotherverylongstring"], "sisa") # => true
puts inAllStrings(["thisisaverylongstring", "thisisanotherverylongstring"], "isan") # => false
puts inAllStrings(["gandalf", "aragorn", "sauron"], "sam") # => false
puts inAllStrings(["axe", "ajax", "axl rose"], "ax") # => true
