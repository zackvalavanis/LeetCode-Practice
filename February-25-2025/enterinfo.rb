# Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

while true 
  puts 'Enter a word'
  input = gets.chomp
  if(input ==  'hello')
    break 
  end 
end 