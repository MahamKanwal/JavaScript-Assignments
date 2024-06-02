    //    Chapter 14 to 16 ARRAYS

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var studentNames = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var studentNames = new Array ();

// 3. Declare and initialize a strings array.

//  var studentNames = ["Kanwal","Maham","Nazia","Manahil"];

// 4. Declare and initialize a numbers array.

// var studentNumbers = [500,550,600,400,650];

// 5. Declare and initialize a boolean array.

// var booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array.

// var mixedArray = ["Maham", "Kanwal", true, 100];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// var count = 0 ;
// var i = 0 ;
// document.write("<h1>Qualifications: </h1>" + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>" + "<br/>");

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var stuNames = ["Micheal", "John", "Tony"];
// var stuScore = [320,230,480];
// var total = [500];
// percentage1 = (score[0]/total)*100;
// percentage2 = (score[1]/total)*100;
// percentage3 = (score[2]/total)*100;
// document.write("Score of " + stuNames[0] + " is " + stuScore[0] +  " . Percentage: " + percentage1 + " % " + "<br/>")
// document.write("Score of " + stuNames[1] + " is " + stuScore[1] + " . Percentage: " + percentage2 + " % " + "<br/>")
// document.write("Score of " + stuNames[2] + " is " + stuScore[2] + " . Percentage: " + percentage3 + " % " + "<br/>")

// 9. Initialize an array with color names. Display the array
// elements in your browser.

// var colors = ["Red", "Green", "Blue", "Purple", "White", "Brown"];
// var i = 0 ;
//  document.write("Colors Name: " + colors[i++] +"<br/>" + "<br/>")
//  document.write("Colors Name: " + colors[i++] +"<br/>" + "<br/>")
//  document.write("Colors Name: " + colors[i++] +"<br/>" + "<br/>")
//  document.write("Colors Name: " + colors[i++] +"<br/>" + "<br/>")
//  document.write("Colors Name: " + colors[i++] +"<br/>" + "<br/>")
//  document.write("Colors Name: " + colors[i++] +"<br/>" + "<br/>")
 
 // a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// var userColor = prompt("Which color you want to add?");
// colors[0] = userColor;
// document.write("Colors Name:" + userColor + "<br/>")

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// var userColorEnd = prompt("Which color you want to add the end?");
// colors.push(userColorEnd);
// document.write("Updating array " + userColorEnd + "<br/>")

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// colors [1][2]=("Orange", "Pink");
//  document.write("Colors Name: " + colors[1][2] + "<br/>")

// d. Delete the first color in the array. Display the updated
// array in your browser.

// colors.shift();
// document.write("Updated array :"+ colors+"<br>")

// e. Delete the last color in the array. Display the updated
// array in your browser.

// colors.pop();
// document.write("Updated array :" + colors + "<br>")

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// var index = prompt("Enter the index at which you want to add a color");
// var addColor = prompt("Enter the color name");
// document.write("Updated array :" + colors + "<br>");

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var index = +prompt("At which index you want to delete color");
// var deleteCount = +prompt("How many colors do you want to delete?");
// colors.splice(index, deleteCount);
// document.write("Updated array :" + colors + "<br>");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var score=[320,230,480,120];
// document.write('Scores of Students : '+score+'<br>');   
// document.write('Ordered Scores of Students : '+score.sort()+'<br>');

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("<p>Original array of city names:</p>");
// document.write("<p>" + cities + "</p>");
// var selectedCities = [cities[2] , cities[3] ,];
// document.write("<p>Array of selected cities:</p>");
// document.write("<p>" + selectedCities + "</p>");

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var array=['This','is','my','cat'];
// document.write('Array : '+'<br>'+array+'<br>');
// var string=array.join(' ');
// document.write('String : '+'<br>'+string);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var devices = ['keyboard', 'mouse', 'printer', 'monitor'];
// var out;
// document.write('Devices :' +devices+ '<br>');
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')

// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')
// out = devices.shift();
// document.write('Out' + '<br>' + out + '<br>')

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// var devices = []
// devices.push("Keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// console.log(devices.pop());
// console.log(devices.pop());
// console.log(devices.pop());
// console.log(devices.pop());

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// var phoneMenu = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
// var index = 0;
// document.write('<select>')
// document.write('<option>' + phoneMenu[index++] + '<option>')
// document.write('<option>' + phoneMenu[index++] + '<option>')
// document.write('<option>' + phoneMenu[index++] + '<option>')
// document.write('<option>' + phoneMenu[index++] + '<option>')
// document.write('<option>' + phoneMenu[index++] + '<option>')
// document.write('<option>' + phoneMenu[index++] + '<option>')
// document.write('<select>')

    //    End Chapter 14 to 16