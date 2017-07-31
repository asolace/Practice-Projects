def super_print(string, args = {})
  defaults = { times: 1, upcase: false, reverse: false }

  options = defaults.merge(args)
  string.upcase! if options[:upcase]
  string.reverse! if options[:reverse]
  options[:times].times do
    puts string
  end
end

super_print("Hello")                                    #=> "Hello"
super_print("Hello", :times => 3)                       #=> "Hello" 3x
super_print("Hello", :upcase => true)                   #=> "HELLO"
super_print("Hello", :upcase => true, :reverse => true) #=> "OLLEH"
