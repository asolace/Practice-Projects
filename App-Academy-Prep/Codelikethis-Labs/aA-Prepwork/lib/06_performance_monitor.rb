def measure(n = 1) # n set to 1 as default in case user don't put in argument for n
    durations = [] # array of duration times

    n.times do
        start = Time.now    # time block started
        yield               # runs the block { ... }
        finish = Time.now   # time block ends
        durations << (finish - start) # push time into array
    end
    durations.reduce(:+) / n # average
end
