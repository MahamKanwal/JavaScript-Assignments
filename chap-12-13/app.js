// ----------- Chapter 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS ----------

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var character = prompt("Enter your character to checks that given input is a number, uppercase letter or lower case letter")
//  var value =  character.charCodeAt(0);

// // // Number
//  if (value >= 48 && value <= 57){
//      alert(character + " is number");
//  }

// // // UpperCase Letters
//  else if (value >= 65 && value <= 90){
//     alert(character + " is Uppercase Letter");
//  }

// // // LowerCase Letters
// else if(value >= 97 && value <= 122){
//     alert(character + " is Lowercase Letter");
//  }

//  else {
//      alert("Your given input is not a number, uppercase and lowercase letters")
//  }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");
// if(firstNumber>secondNumber){
//     alert(firstNumber + " is larger than " + secondNumber);
// }
// else if(firstNumber<secondNumber){
//     alert(secondNumberNumber + " is larger than " + firstNumberNumber);
// }
// else{
//     alert(firstNumber +"and" + secondNumber + "are both equal")
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var num = +prompt("Please enter number to check whether positive, negative or zero");
// if (num>0){
//     alert (num+" is positive");
// }
// else if (num<0){
//     alert(num+" is negative");
// }
// else{
//     alert(num+" is zero");
// }

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// var character = prompt("Enter a character to check vowel or not");
// if (character === "A" || character === "a" || character === "E" || character === "e" || character === "I" || character === "i" 
// || character === "O" || character === "o" || character === "U" || character === "u" ){
// alert(character+ " is a vowel")
// }
// else{
//     alert(character+ " is not a vowel")
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var password='mahamkanwal09';
// var userPassword=prompt('Enter your password');
// if(userPassword===" "){
//     alert('Please enter your password');
// }
// else if(userPassword===password){
//      alert('Correct password')
// }
// else{
//     alert('Incorrect password')
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour=13;
// if(hour<18){
//     greeting='Good day'
//     alert(greeting);
// }
// else{
//     greeting='Good evening';
//     alert(greeting);
// }

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time = +prompt("Please enter time in 24 hours clock format like: 1900 = 7pm");

// if (time >=0 && time < 1200){
//     alert("Good Morning!");
// }
// else if (time >= 1200 && time < 1700) {
//        alert("Good Afternoon!");
//     } 
//     else if (time >= 1700 && time < 2100) {
//          alert("Good Evening!");
//      }
//       else if (time >= 2100 && time <= 2359) {
//     alert("Good Night!");
//  } 
//  else {
//      alert("Your input is invalid");
//      }

// ----------- End of Chapter 12-13 ----------