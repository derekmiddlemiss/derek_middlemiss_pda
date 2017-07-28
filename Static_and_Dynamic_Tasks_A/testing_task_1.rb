### Testing task 1 code:

  Carry out static testing on the code below.  
  Read through the code.  Comment any errors you can see without correcting them.

# val should be an argument of func1:- func1(val) 
def func1 val 
  if val = 1
# indent    
  return true
  else
# indent
  return false
  end
end
  
# def max(a,b)  
dif max a b
  if a > b
      return a 
  else
# return b
  b
  end 
end 
end 
  
def looper 
  for i in 1..10
# indent
  puts i
  end
end
 
failures = 0 

# as written, looper will return a range (1..10),
# so to pass, looper == (1..10) below
if looper == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
# missing end 
  
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
  
if max(100,1) == 100 
  puts "max(100,1) passed"
else
# wrong function name: puts "max(100,1) failed"  
  puts "func1(3) failed"
# correct spelling of failures  
  failrues = failures + 1
end

# condition below should be failures > 0  
if failures 
  puts "Test Failed"
else
  puts "Test Passed"
end


