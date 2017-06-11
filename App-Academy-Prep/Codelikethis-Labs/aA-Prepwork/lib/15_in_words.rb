Ones = {
  0 => "zero",
  1 => "one",
  2 => "two",
  3 => "three",
  4 => "four",
  5 => "five",
  6 => "six",
  7 => "seven",
  8 => "eight",
  9 => "nine"
}

Enties = {
  20 => "twenty",
  30 => "thirty",
  40 => "forty",
  50 => "fifty",
  60 => "sixty",
  70 => "seventy",
  80 => "eighty",
  90 => "ninety"
}

Teens = {
  10 => "ten",
  11 => "eleven",
  12 => "twelve",
  13 => "thirteen",
  14 => "fourteen",
  15 => "fifteen",
  16 => "sixteen",
  17 => "seventeen",
  18 => "eighteen",
  19 => "nineteen"
}

Ions = {
  100 => "hundred",
  1000 => "thousand",
  1_000_000 => "million",
  1_000_000_000 => "billion",
  1_000_000_000_000 => "trillion"
}

class Fixnum
  def in_words
    case self
    when (0..9)
      Ones[self]
    when (10..19)
      Teens[self]
    when (20..99)
      enties
    else
      large_digits
    end
  end

  def enties
    result = Enties[(self / 10) * 10]
    if self % 10 != 0
      result + " " + Ones[(self % 10)]
    else
      result
    end
  end

  def large_digits
    size = Ions.keys.take_while { |size| size <= self }.last
    result = (self / size).in_words + " " + Ions[size]

    if (self % size) != 0
      result + " " + (self % size).in_words
    else
      result
    end
  end
end
