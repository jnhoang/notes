operator = ''

until (operator == 'add' || operator == 'sub' || operator == 'mult' || operator == 'div')
  puts "What operatorulation would you like to do? (add, sub, mult, div)"
  operator = gets.chomp
  puts operator
end

puts "What is number 1?"
num1 = gets.chomp.to_i


puts "What is number 2?"
num2 = gets.chomp.to_i

case operator
  when 'add'
    total = num1 + num2
  when 'sub'
    total = num1 - num2
  when 'mult'
    total = num1 * num2
  when 'div'
    total = num1 / num2
end

puts "Your result is #{total}"