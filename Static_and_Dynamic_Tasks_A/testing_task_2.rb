### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

# correct val to be an argument of func1 
def func1( val ) 
# == for equality operator
  if val == 1
    # fix indent
    return true
  else
    # fix indent
    return false
  end
end
  
# 'def' and a,b are arguments
def max( a,b )
  if a > b
    # fix indent
    return a 
  else
    # not an error, but make clear returning b
    return b
  end 
end 
# remove extra end
#end 
  
def looper 
  for i in 1..10
    puts i
  end

end

failures = 0 

# as written, looper will return a range 1..10 as the last
# evaluated object, so correct if below to equate to this range 
if looper == (1..10) 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
#
end
 
  
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
  
if max(100,1) == 100 
  puts "max(100,1) passed"
else
  # correct function name
  puts "max(100,1) failed"
  # correct spelling of 'failures'
  failures = failures + 1
end

  
# test only fails if failures > 0  
if failures > 0
  puts "Test Failed"
else
  puts "Test Passed"
end
