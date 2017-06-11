# Sign Tweakers
# ------------------------------------------------------------------------------
# Given a perfectly respectable business sign, determine if pranksters
# George and Harold can make a vandalized sign out of it using the same or
# fewer letters.
# Ignore capitalization and punctuation.

def can_tweak_sign?(normal_sign, vandalized_sign)
  normalHash = Hash.new(0)
  vandalizedHash = Hash.new(0)

  normal_sign.each_char do |char|
    normalHash[char.downcase] += 1 unless char == ''
  end
  vandalized_sign.each_char do |char|
    vandalizedHash[char.downcase] += 1 unless char == ''
  end

  vandalizedHash.each do |key, value|
    return false if value > normalHash[key]
  end
  return true
end

puts "-------Sign Tweakers-------"
puts can_tweak_sign?("Come in and see our pretty armchairs", "Come and see our hairy armpits") == true
puts can_tweak_sign?("Student and teacher art fair starts Wed.", "Teacher farts stain underwear") == true
puts can_tweak_sign?("Choose the bread of life or you are toast", "Teacher farts stain underwear") == false







# Repeated Number Ranges
# ------------------------------------------------------------------------------
# Given a list of numbers, give the start and end indices each time a number
# shows up multiple times in a row.
#

def repeated_number_ranges(numbers)
  result = []
  initializer = nil
  i = 0
  while i < numbers.length
    if numbers[i] == numbers[i + 1]
      initializer = i if initializer.nil?
    elsif !initializer.nil?
      result << [initializer, i]
      initializer = nil
    end
    i += 1
  end
  result
end

puts "-------Repeated Number Ranges-------"
puts repeated_number_ranges([1, 1, 2]) == [[0, 1]]
puts repeated_number_ranges([1, 2, 3, 3, 4]) == [[2, 3]]
puts repeated_number_ranges([1, 2, 3, 3, 4, 4]) == [[2, 3], [4, 5]]
puts repeated_number_ranges([1, 1, 1, 2, 3, 3, 4]) == [[0, 2], [4, 5]]
puts repeated_number_ranges([8, 7, 7, 14, 12, 12, 12, 12, 21]) == [[1, 2], [4, 7]]






# Time Sums
# ------------------------------------------------------------------------------
# Return an array of all the minutes of the day whose digits sum to N.
#
# Use military time, so 1:00 PM is really 13:00 PM.
# ------------------------------------------------------------------------------

def time_sums(n)
  times = []
  hr = 0
  until hr == 24
    min = 0
    until min == 60
      min_sum = min.to_s.split('').map(&:to_i).reduce(&:+)
      hr_sum = hr.to_s.split('').map(&:to_i).reduce(&:+)
      sum = min_sum + hr_sum

      minString = min.to_s.split('')
      hrString = hr.to_s.split('')

      minString.unshift('0') until minString.length == 2
      hrString.unshift('0') until hrString.length == 2

      times << hrString.join('') + ":" + minString.join('') if sum == n

      min += 1
    end
    hr += 1
  end
  times
end


puts "\nTens Time\n" + "*" * 15 + "\n"
puts time_sums(0) == ["00:00"]
puts time_sums(1) == ["00:01", "00:10", "01:00", "10:00"]
puts time_sums(23) == ["09:59", "18:59", "19:49", "19:58"]
puts time_sums(24) == ["19:59"]






# Fall and Winter Birthdays
# ------------------------------------------------------------------------------
# Given a list of students and what month their birthday is, return all the
# pairs of students whose birthdays both fall in the second half of the year.
# Months are numbers, and assume that July (month 7) and later is the second
# half of the year.
#
# Only count pairs once, and work from the beginning of the list to the end.
#

def fall_and_winter_birthdays(students_with_birthdays)
  result = []
  students_with_birthdays.each_with_index do |studentA, i|
    studentA_name = studentA[0]
    studentA_bday = studentA[1]
    rest_students = students_with_birthdays[i + 1...students_with_birthdays.length]

    rest_students.each do |studentB|
      studentB_name = studentB[0]
      studentB_bday = studentB[1]

      result << [studentA_name, studentB_name] if studentA_bday >= 7 && studentB_bday >= 7
    end
  end
  result
end

students_with_birthdays_1 = [
  ["Asher", 6],
  ["Bertie", 11],
  ["Dottie", 8],
  ["Warren", 9]
]

second_half_birthday_pairs_1 = [
  ["Bertie", "Dottie"],
  ["Bertie", "Warren"],
  ["Dottie", "Warren"]
]

students_with_birthdays_2 = [
  ["Asher", 6],
  ["Bertie", 11],
  ["Dottie", 8],
  ["Warren", 9],
  ["Charlie", 7],
  ["Nassim", 4],
  ["Ajit", 10],
]

second_half_birthday_pairs_2 = [
  ["Bertie", "Dottie"],
  ["Bertie", "Warren"],
  ["Bertie", "Charlie"],
  ["Bertie", "Ajit"],
  ["Dottie", "Warren"],
  ["Dottie", "Charlie"],
  ["Dottie", "Ajit"],
  ["Warren", "Charlie"],
  ["Warren", "Ajit"],
  ["Charlie", "Ajit"],
]


puts "\nFall and Winter Birthdays\n" + "*" * 15 + "\n"
puts fall_and_winter_birthdays(students_with_birthdays_1) == second_half_birthday_pairs_1
puts fall_and_winter_birthdays(students_with_birthdays_2) == second_half_birthday_pairs_2






# Care Bear Summary
# ------------------------------------------------------------------------------
# You have a calendar of hugs that care bears made (given as a list of
# names by care bears).  Some of them have hugged multiple
# times in a row.
#
# Return a hash where the keys are the care bears and the values are an array
# of all of the start and end days of their hugging streaks.
#
# Days are the index of the calendar array.

def care_bear_summary(calendar_of_hugs)
  result = {}
  starting = nil
  streaks = []
  i = 0
  while i < calendar_of_hugs.length
    if calendar_of_hugs[i] == calendar_of_hugs[i + 1]
      starting = i if starting.nil?
    elsif !starting.nil?
      streaks << [calendar_of_hugs[i], [starting, i]]
      starting = nil
    end
    i += 1
  end
  streaks.each_with_index do |set, i|
    !result[set[0]] ? result[set[0]] = [set[1]] : result[set[0]] << set[1]
  end
  result
end

puts "\nCare Bear Summary\n" + "*" * 15 + "\n"

hug_calendar_1 = [
  "Birthday Bear",
  "Bedtime Bear",
  "Birthday Bear",
  "Birthday Bear",
  "Bedtime Bear"
]

care_bear_counts_1 = {
  "Birthday Bear" => [[2, 3]]
}

hug_calendar_2 = [
  "Birthday Bear",
  "Birthday Bear",
  "Cheer Bear",
  "Bedtime Bear",
  "Bedtime Bear",
  "Birthday Bear",
  "Birthday Bear",
  "Birthday Bear",
  "Bedtime Bear",
  "Friend Bear"
]

care_bear_counts_2 = {
  "Birthday Bear" => [[0, 1], [5, 7]],
  "Bedtime Bear" => [[3, 4]]
}

puts care_bear_summary(hug_calendar_1) == care_bear_counts_1
puts care_bear_summary(hug_calendar_2) == care_bear_counts_2
