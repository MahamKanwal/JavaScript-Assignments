// var cities = ["karachi", "islamabad", "peshawar", "quetta", "lahore", "multan"]
// var userCity = prompt("enter your city:");
// var found = false;
// for (i = 0; i < cities.length; i++) {
//     if (cities[i] == userCity) {
//         found =true;
//         break
//     }
// }

// if(found){
//     alert("your city is found")
// }
// else{
//     alert("your city is not found")
// }

// var fruits = ["orange", "mango", "papaya", "watermelon", "chickoo"]
// var userFruit = prompt("Enter your fruit name:");
// var found = false;
// for (i=0; i < fruits.length; i++){
//     if(fruits[i]==userFruit){
//        found=true;
//        break
//     }
// }
// if(found){
//     alert("Your fruit is found");
// }
// else{
//     alert("Your fruit is not found");
// }

// NESTING    LOOPS    PRACTICE

// var matrix=[[0,1,2,3],[4,5,6,7],[8,9,10,11]]
// for(var i=0; i<matrix.length; i++){
// document.write(matrix[i].join(" ") + "<br>")
// }

// for(var i=0; i<matrix.length; i++){
//     for(var j=0; j<matrix[i].length;j++){
//            document.write(matrix[i][j]+ " ")
//     }
//     document.write("<br>")
// }

// for(i=1; i<4; i++){ 
//     for(j=1; j<5; j++){
//         document.write("*")
//     }
// document.write("<br>");
// }

// RIGHT HALF PYRAMID
// for (var i=1; i<=10; i++){
//     for(var j=1; j<=i; j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// REVERSE RIGHT HALF PYRAMID
// for(var i=10; i>=0; i--){
//     for(var j=i; j>=0; j--){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// TRIANGLE STAR PATTERN
// for (var i = 1; i <= 11; i++) {
//         for (var j = 11; j > i; j--) {
//           document.write(" &nbsp ");
//         }
//         for (var k = 1; k <= 2 * i - 1; k++) {
//           document.write("*");
//         }
//         document.write("<br>");
//       }
