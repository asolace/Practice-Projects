# Biodiversity
#
# Given an array of specimens, write a function biodiversity(ary) which
# returns the biodiversity index of the argument passed in. The biodiversity
# index is defined by the following formula:
#
# biodiversityIndex = numberOfSpecies ^ 2 * smallestPopulationSize / largestPopulationSize

def biodiversity(animals_array)
  animals = Hash.new(0)
  animals_array.each {|animal| animals[animal] += 1 }

  smallest = animals.values.min
  largest = animals.values.max
  number_species = animals_array.uniq.count

  bio_index = (number_species**2)*smallest/largest
end


p biodiversity(["cat"]) => 1
p biodiversity(["cat", "cat", "cat"]) => 1
p biodiversity(["cat", "cat", "dog"]) => 2
p biodiversity(["cat", "fly", "dog"]) => 9
p biodiversity(["cat", "fly", "dog", "dog", "cat", "cat"]) => 3
