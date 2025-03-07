# Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"


password = input("Please enter a password: ")
if password == 'Joshua':
  print("Shall we play a game?")
else: 
  print('Access Denied')