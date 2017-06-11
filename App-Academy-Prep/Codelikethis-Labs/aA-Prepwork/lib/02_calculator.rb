def add(n1, n2)
    n1 + n2
end

def subtract(n1, n2)
    n1 - n2
end

def sum(arr)
    arr.reduce(:+) || 0
end

def multiply(n1, n2)
    n1 * n2
end

def multipies(arr)
    arr.reduce(:*)
end

def power(num)
    num**2
end

def factorial(n)
    return 1 if n <= 1
    return n * factorial(n - 1)
end
