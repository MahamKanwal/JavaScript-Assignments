//----------CHAPTER 38-42
// ------TASK 1
//1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a,b){
//     var result = a**b;
//     console.log(result);
// }
// power(3,4);

// Task 2
//Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

// function power(a,b){
//     console.log(a**b);
// }
// power(5,9)

// var year = +prompt("enter a year");
// switch(year){
//     case "2012" :
//         console.log("leap year");
//         break;

//         case "2016" :
//         console.log("leap year");
//         break;

//         case "2020" :
//         console.log("leap year");
//         break;

//         default :
//         console.log("this not a year");
// }

// Task 3
//If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2

// var a = +prompt("enter your first side");
// var b = +prompt("enter your second side");
// var c = +prompt("enter your third side");

// function findingS(a,b,c){
//   var S = (a+b+c)/2
//   return S;
// }
// var foundS = findingS(a,b,c)

//  console.log(foundS)
//  findingS(a,b,c)

// function area(foundS){
//     var findingArea = findingS*(foundS-a)*(foundS-b)*(foundS-c)
//   return findingArea
// }

// var result = area(foundS)
// console.log(result)

// Task 4
// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions

// function mainFunction() {
//     var sub1 = +prompt('Enter first subject marks');
//     var sub2 = +prompt('Enter second subject marks');
//     var sub3 = +prompt('Enter third subject marks');
//     var total = +prompt('Enter total marks')
//     var average = ave(sub1, sub2, sub3);
//     var per = percen(sub1, sub2, sub3, total);
//     document.write('<h3>' + 'Average is ' + '</h3>' + average + '<br>');
//     document.write('<h3>' + 'Percentage is ' + '</h3>' + per+' %' + '<br>');

// }
// function ave(a, b, c) {
//     var av = (a + b + c) / 3;
//     av=av.toFixed(2)
//     return av;
// }

// function percen(a, b, c, total) {
//     var percentage = ((a + b + c) / total) * 100;
//    percentage= percentage.toFixed(2);
//     return percentage;
// }
// mainFunction();

// Task 5
//You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

// function index(str, char) {
//     var no;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             no = i
//             break;
//         }
//     }
//     return no
// }
// var str = 'hello world'
// var indexOf = prompt('Write character to find ');
// var result = index(str, indexOf);
// document.write('The indexOf ' + indexOf + ' is ' + result)

// Task 6
// Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

// var str = prompt('Enter sentences to delete vowels in them');
// function removeVowels(sentence) {
//     var removed = ''
//     for (var i = 0; i < sentence.length; i++) {
//         if (sentence[i] === 'a' || sentence[i] === 'A' || sentence[i] === 'e' || sentence[i] === 'E' || sentence[i] === 'i' || sentence[i] === 'I' || sentence[i] === 'o' || sentence[i] === 'O' || sentence[i] === 'u' || sentence[i] === 'U') {
//             continue
//         }
//         else {
//             removed += sentence[i]
//         }
//     }
//     return removed
// }
// var result = removeVowels(str);
// document.write('Before :' + str + '<br>');
// document.write('After  : ' + result + '<br>');

// Task 7
// Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.

// var str = 'Please read this application and give me gratuity';
// var occurence = [];
// var count = 0;
// function findOccurence() {
//     var chars = str.toLowerCase().split('');
//     for (var i = 0; i < chars.length; i++) {
//         var char = chars[i];
//         var next = chars[i + 1];
//         if (isCorrectCharc(char) && isCorrectCharc(next)) {
//             count++;
//             var twoChar = char + next;
//             occurence.push(twoChar)
//         }
//     } return count
// }
// function isCorrectCharc(char) {
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false
//     }

// }
// var count = findOccurence();
// document.write('String :' + str + '<br>');
// document.write('Count :' + count + '<br>');
// document.write('Occurence :' + occurence + '<br>');

// Task 8
// The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters

// var distance = +prompt("Enter distance from city A to City B in KM: ")
// meter(distance)
// feet(distance)
// inches(distance)
// centimeters(distance)

// function meter(dis){
//   var meterDistance = dis * 1000
//   document.write("Distance between city A to city B is " + meterDistance + " meters." + "<br>")
// }

// function feet(dis){
//   var feetDistance = dis * 3281
//   document.write("Distance between city A to city B is " + feetDistance + " feets." + "<br>")
// }

// function inches(dis){
//   var inchDistance = dis * 39370
//   document.write("Distance between city A to city B is " + inchDistance + " inches." + "<br>")
// }

// function centimeters(dis){
//   var centimeterDistance = dis * 100000
//   document.write("Distance between city A to city B is " + centimeterDistance + " centimeters." + "<br>")
// }

// Task 9
// Write a program to calculate overtime pay of employees.Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.

// var workingHours = +prompt("Enter your working hours: ")
// var overTime, overTimePay;
// var overTimeHourPay = 12;

// if(workingHours > 40){
//   overTime = workingHours - 40;
//   overTimePay = overTime * overTimeHourPay;
//   alert("Your overtime pay cost is: " + overTimePay + "rupees");
// }

// else{
//   alert("You need to work more to get overtime")
// }

// Task 10
// A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

// var amount = +prompt("Enter amount to Withdraw")
// var hundred = parseInt(amount / 100)
// var fifty = parseInt((amount % 100) / 50)
// var ten = parseInt((((amount % 100) % 50) / 10))

// document.write("Entered amount: " + amount + "<br>");
// document.write("You will have " + hundred + " hundred notes " + fifty + " fifty notes " + ten + " ten notes.")

//-------End of Chap 38-42
