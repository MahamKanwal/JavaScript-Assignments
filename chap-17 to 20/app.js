// ----------- Chapter 17-20 ARRAYS AND LOOP ----------

// 1. Declare and initialize an empty multidimensional array.(Array of arrays)

// var arrays = [ [], [], [] ];

// 2. Declare and initialize a multidimensional array representing the following matrix:

//  var multidimensionalArray = [ [0,1,2,3],
//               [1,0,1,2] , 
//               [2,1,0,1] 
//             ];
// console.log(multidimensionalArray);

// 3. Write a program to print numeric counting from 1 to 10.

// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }
    
// 4. Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.

// var tableNum=+prompt ("Enter a numbet to show its multiplication table");
// var tableLength=+prompt ("Enter length multiplication table");
// document.write("Multiplication table of "+tableNum+"<br>"+" Length "+tableLength+"<br>"+"<br>")
// for(var i=1; i<=tableLength; i++){
//     document.write(tableNum+" X" +i+" ="+(tableNum*i)+"<br>")
// }

// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”];

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i] + "</br>")
// }
// for(var i=0; i<fruits.length; i++){
//     document.write("Element at index "+ i + " is " + fruits[i]+"<br>")
// }

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// document.write("<h2>"+ "Counting" +"</h2>"+"<br>")
// for(var i=1; i<=15; i++){
//     document.write(i+"<br>"+"<hr>")
// }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// document.write("<h2>"+ "Reverse counting"+ "</h2>"+"<br>")
// for(var i=10; i>=1; i--){
//     document.write(i+"<br>"+"<hr>")
// }

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// document.write("<h2>"+ "Even"+ "</h2>"+"<br>")
// for(var i=0; i<=20; i++){
//     document.write(i++ +"<br>"+"<hr>")
// }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// document.write("<h2>"+ "Odd"+ "</h2>"+"<br>")
// for(var i=1; i<=19; i+=2){
//          document.write(i +"<br>"+"<hr>")
// }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
 
// document.write("<h2>"+ "Series"+ "</h2>"+"<br>")
//  for (var i=0; i<=20; i++){
//              document.write(i++ +"k"+"<br>"+"<hr>"  )
//          }
     
//7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to our ABC bakery.What do you want to order maam/sir?");




// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].






// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]




// 10. Write a program to print multiples of 5 ranging 1 to 100.

for(var i=5;i<=100;i=i+5){
         document.write(i+',')
 }

// ----------- End of Chapter 17-20 ----------