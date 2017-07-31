class Student

  def initialize(first, last)
    @first, @last = first, last
    @courses = []
  end

  def name
    "#{@first} #{@last}"
  end

  def courses
    @courses
  end

  def enroll(course)
    unless has_conflict?(course)
      @courses << course
      course.add_student(self)
    end
  end

  def has_conflict?(course2)
    conflict = false
    @courses.each do |course|
      conflict = true if course.conflicts_with?(course2)
      puts "#{course.name} conflicts with #{course2.name}!"
    end
    conflict
  end

  def course_load
    cl = Hash.new(0)
    @courses.each { |course| cl[course.dept] += course.credits }
    cl
  end

end

class Course
  attr_accessor :name, :dept, :credits, :timebl, :days

  def initialize(name, dept, credits, timebl = nil, days = nil)
    @name, @dept, @credits = name, dept, Integer(credits)
    @students = []
    @timebl = Integer(timebl)
    @days = days
  end

  def students
    @students
  end

  def add_student(student)
    @students << student
  end

  def conflicts_with?(course2)
    timebl == course2.timebl && days & course2.days
  end

end
