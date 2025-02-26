# Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

while true 
  puts 'Enter a number'
  input = gets.chomp.to_i
  if input > 10
    break
  end 
end 
