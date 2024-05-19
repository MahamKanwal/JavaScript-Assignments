// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var cityName = prompt("Enter the city name") ;
// if(cityName === "karachi"){
// alert("Welcome to city of lights");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var userGender = prompt ("Enter your gender");
// if (userGender === "male"){
//     alert("Good Morning Sir");
// }
// else if (userGender === "female"){
//     alert("Good Morning Ma’am");
// }
// else {
//     alert("Good Morning");
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

// var color = prompt("Enter the traffic color");
// if (color === "red"){
//     alert("Must Stop");
// }
// else if (color === "yellow"){
//     alert("Ready to move");
// }
// else if (color === "green"){
//     alert("Move now");
// }

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// var carFuel = prompt ("Enter your remaining fuel in car in litres");
// if (carFuel < "0.25"){
//     alert("Please refill the fuel in your car");
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// Part A
//  var a = 4;
//  if (++a === 5){
//  alert("given condition for variable a is true");
//  }
// Ans. In the above code, the alert message will be displayed.

// Part B
// var b = 82;
// if (b++ === 83){
//      alert("given condition for variable b is true");
// }
// Ans. In the above code, the alert message will not be displayed.

// Part C
//   var c = 12;
//  if (c++ === 13){
//  alert("condition 1 is true");
//  }
//  if (c === 13){
//  alert("condition 2 is true");
//  }
//  if (++c < 14){
//  alert("condition 3 is true");
//  }
//  if(c === 14){
//  alert("condition 4 is true");
//  }
// Ans. In the above code, the 2nd and the 4th alert messages will only be displayed.

// Part D
// var materialCost = 20000;
//  var laborCost = 2000;
//  var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
//  }
// Ans. In the above code, the alert message will be displayed.

// Part E
// if (true){
// alert("True");
//  }
//  if (false){
//  alert("False");
//  }
// Ans. In the above code, the 1st alert message will be displayed.

//  Part F
//  if("car" < "cat"){
//   alert("car is smaller than cat");
//  }
// Ans. In the above code, the alert message will be displayed.

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

// var obtainedMarks = +prompt("Enter Obtained Marks in three subjects");
// var totalMarks = +prompt ("Enter total marks");
// var percentage = (obtainedMarks / totalMarks) * 100 ;
//  var grade ;
//  var remmarks ;
// if (percentage >= 80){
//     grade = "A-One";
//     remmarks = "Excellent";
// }
// else if(percentage >= 70){
//     grade = "A";
//     remmarks ="Good";
// }
// else if (percentage >= 60){
//     grade = "B";
//     remmarks = "You need to improve";
// }
// else if (percentage < 60){
//     grade = "Fail";
//     remmarks = "Sorry";
// }
// document.write("<h3>"+ "Marksheet"+ "</h3>");
//  document.write("<p>Total marks :"+totalMarks+"</p>");
//  document.write("<p>Percentage :"+percentage+"</p>");
// document.write("<p>Grade :" + grade +"</p>");
// document.write("<p>Remarks :" + remmarks + "</p>");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.

// var secret=5;
// var guess=+prompt("Guess the number: \nBetween 1-10");

// a. If user guesses the same number, show “Bingo! Correct
// answer”.

// if (guess===secret){
//     alert("Bingo! Correct answer");
// }

// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// if(++secret===guess){(
//     alert("Close enough to the correct answer");
// }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var num=+prompt("Enter number to check number is divisible by 3 or not");
// if(num % 3===0){
//     alert(num+"" is divisible by 3")
// }
// else{
//     alert(num+" is not  divisible by 3")
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var num =+prompt("Enter number to check number is even or odd");
// if (num % 2===0){
//     alert(num+" is even");
// }
// else{
//     alert(num+" is odd");
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature=+prompt('Enter your city temperature');
// if(temperature>40){
//     alert('It is too hot outside')
// }
// else if(temperature>30){
//      alert('The Weather today is Normal.')
// }
// else if(temperature>20){
//     alert("Today’s Weather is cool.')
// }
// else if(temperature>10){
//     alert('OMG! Today’s weather is so Cool.')
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

//  var firstNumber=+prompt('Enter first Number');
// var secondNumber=+prompt('Enter second Number');
// var oper=prompt('Choose your operation : \n(+, - , * , % ')
// if(oper==='+'){
//     alert(firstNumber+secondNumber)
// }
// else if(oper==='-'){
//     alert(firstNumber-secondNumber)
// }
// else if(oper==='*'){
//     alert(firstNumber*secondNumber)
// }
// else if(oper==='/'){
//     alert(firstNumber/secondNumber)
// }
// else{
//     alert(firstNumber%secondNumber)
// }
    
// ----------- End of Chapter 9-11 ----------