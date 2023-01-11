# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.


# PSEUDOCODE:
# Input: Integer
# output: String interpolation stating if integer is even or odd
# Create a method called even_or_odd with a parameter for a number
# Nest a conditional inside the method to produce a decision on whether the number inputed is even or odd
# If the number modulo 2 is equal to 0 then output "#{num} is even"
# Else output "#{num} is odd"
# Print outcome with the test variables given

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_or_odd num
    if num % 2 == 0
        "#{num} is even"
    else
        "#{num} is odd"
    end
end

p even_or_odd(num1)
# "7 is odd"
p even_or_odd(num2)
# "42 is even"
p even_or_odd(num3)
# "221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# PSEUDOCODE
# Input: string 
# Output: String inputed with vowels removed
# Create a method called remove_vowels with parameter for a string
# Use the .delete built-in method which returns a copy of str with all the characters in the intersection of its arguments deleted.
# Insert the vowels and the capitalized vowels as an argument
# Print outcome with the test variables given


beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels str
    str.delete "aeiouAEIOU"
end

p remove_vowels(beatles_album1)
"Rbbr Sl"
p remove_vowels(beatles_album2)
"Sgt Pppr"
p remove_vowels(beatles_album3)
"bby Rd"


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# PSEUDOCODE
# Input: String 
# Output: String stating if word inputted is a palindrome
# Create a method called pali with a parameter for a strings
# Use the .downcase to lowercase all leters in string
# Use the .reverse built-in method to reserve the letters of the string and set them equal to the original string .
# If the down case/reverse string is equal to the original string in reverse, out put  "#{str} is a polindrome"
# Else, then output "#{str} is not a palindrome" 
# Print outcome with the test variables given


palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def pali str
    if str.downcase==str.reverse.downcase
        "#{str} is a polindrome"
    else "#{str} is not a palindrome" 
    end
end

p pali(palindrome_tester1)
# "Racecar is a polindrome"
p pali(palindrome_tester2)
# "LEARN is not a palindrome"
p pali(palindrome_tester3)
# "Rotator is a polindrome"