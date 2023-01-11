# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: 

Object-oriented programming, also known as OOP is proggramming that essentialy focuses its code around objects.What I mean by this , is that while certain programming languages focus on functions and logic, OOP focuses on the data, or objects themselves.

As stated above, OOP is different in comparison to fuctional programming, because object-oriented programming revolves around and focuses on objects, making code more efficient and easier to understand to the human eye.

Researched answer:

Object-oriented programming better known as OOP is a specialized style of programming, which is associated with the concepts of  clases and objects.Classes are the blueprints that establish the layout for an object. An object can be anything,objects descrive what something is and exacly what it can do. OOP solves problems by creating objects that intereact with each other

Something incredibly interested that I learned while researching object-oriented programming, is that OOP consist of  4 core concepts, abstraction,encapsulation,inheritance, and polymorphism. B

1) Abstraction - Reduce complexity and isolate impact of change
2) Encapsulation - reduce complexity and increases reusability
3) Inheritance - Eliminates redundant code
4) Polymorphism - Refactor ugly switch/ case statements.

There are many differences between OOP and functional programming.Functional programming uses functions and their evaluations to create programs. With functional programming the declarative programming model is followed, and the nature of the data is immutable.On the other hand, OOP focuses on the use of objects and classes, follows the imperative programming model, and the nature of the data is mutable.


2. What is the difference between a Float and an Integer in Ruby?

Your answer:

The difference between a float and an integer, is that an integer is any whole number (ex: 1,2,3,4,5) while a float is a number that is made up of decimals as well (ex: 1.5, 2.3, 3.0, 4.9, 5.0)

Researched answer:

Although floats and integers are both numerical data, they are very different. An integer, also typically called an int , is a whole number without any decimal place. Integers can be positive,negative,or 0. A float or a floating point number , represents a real number. Real numbers canbe either irrational or rational, or can be numbers that include a fraction part. To sum this up, in Ruby, a float would be defined as a number that contains a decimal. Floats are typically useful when dealing with very large numbers, or high precision numbers. Here you can see an example of integers and floats.

Examples:
 Integers ( -1, 0, 50_000)
 Floats ( 1.0, 50.0, 2.5)


3. Ruby has an implicit return. What does that mean?

Your answer: 

Ruby having an explicit return simply means that  a function, in Rubys world a method will return a value without having to use the keyword return. Ruby will always retun the last line of code of expression, unless there was an explicit return before it.

Researched answer:

When we hear that Ruby has an implicit return, this just simply means that there is no need  to use the word return.This is because in everyblock, Ruby will return the value of the last line automatically, so no need for return is needed, for the sake of using mininal code. Isnt this amazing. I found this to be really interesting because i didnt think something like this would be possible.


4. What is a block in Ruby?

Your answer:

A block in Ruby refers to anonymous function you can use to code.

Researched answer:

A Ruby block is a way of being able to copy code into a variable. Ruby blocks is essentially the same thing as a method, except it doesnt belong to an object. Blocks are inclosed in a do-end statement and curly braces. Now, Ruby blocks are incredible in the sense that they allow you to group code into a standalone unit that you can see as an argument.
Something that I found interesting about Ruby blocks , is that blocks can have arguments which should be defined between two pipes / characters, and that any method can receive a block, whether it uses it or not. Here you can see an example of a Ruby block.

Example:

def my_name (name)
    puts name
end


5. How do you extract a value in a Ruby hash?

Your answer: 

You can extract a value in a Ruby hash by using its keys.

Researched answer:

Extracting the value in  a Ruby hash can be done by using bracket notation with the key inside. To simplify this, the corresponding key must be referenced as shown below.

Example:
 
 name_od_my_hash[:key_name] 

## Looking Ahead: Terms for Next Week

1. Class Inheritance:

Class inheritance is when a class called a  subclass inherits behavior from another class called a superclass. Inheritance is used

2. RSpec:

The R stands for Ruby and spec is short for specification.Rspec is a domain specific language written in Ruby.It is a framework testing tool used for Ruby and its the most frequently used testing library for Ruby in production applications.

3. CRUD:

CRUD stands for create,read,update, and delete. These are the basic types of functionality we want our models to provide when building APIs

4. Test-driven development:

A technique where you describe the behavior of your code before implementing it 

5. HTTP: 

Stands for (HyperText Transfer Protocol) and is responsible for communication between web servers and the clients
