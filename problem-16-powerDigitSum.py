"""
Problem 16: Power digit sum

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26
What is the sum of the digits of the number 2^1000?
"""

def power_digit_sum(num,power):
  var_power_digit = str(num**power)
  var_sum = 0

  for c in var_power_digit:
    var_sum += int(c)

  print(var_sum)


power_digit_sum(2,1000)
