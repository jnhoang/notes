target_number =  rand(1..100)
rounds = 0
guess = ''

puts target_number

puts "Guess a number between 1 and 100"

until guess == target_number
  guess = gets.chomp.to_i
  if (guess == target_number)
    puts "you got it #{rounds} guesses"
  elsif (guess > target_number)
    puts "The number is lower than #{guess}. Guess again."
    rounds += 1
  else 
    puts "The number is higher than #{guess}. Guess again."
    rounds += 1
  end
end
