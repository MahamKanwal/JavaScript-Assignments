// CHANGING CASE 

// var myName = "MAHAM KANWAL";
// // myName.toLowerCase()
// var loweredString = myName.toLowerCase()
// console.log(loweredString);

// var array1 = [1,2,3]
// array2 = array1
// array1.push(4)
// console.log(array1);
// console.log(array2);

// var num1 = 2;
// var num2 = num1;
// num1 = num1 + 5;
// console.log(num1);
// console.log(num2);

// var cities = ["karachi","islamabad","lahore","peshawar","quetta"]
// var userCity = prompt("Enter your city");
//  for(var i=0 ; i<cities.length ; i++){
//     if(cities[i]==userCity){
//         alert("Your city is found");
//         break
//     }
//  }

// var stuName = "maham";
// var firstLetter = stuName[0].toUpperCase();
// console.log(firstLetter);
// var restLetters = stuName.slice(1).toLowerCase();
// console.log(restLetters);
// var result = firstLetter + restLetters;
// console.log(result);

// var result = stuName[0].toUpperCase() + stuName.slice(1).toLowerCase();
// console.log(result);

// var studentNames = "maham manahil nazia kanwal";
// var array1 = studentNames.split(" ")
// var titleCase = []
// // console.log(array1);
// for(var i=0; i<array1.length; i++){
//     titleCase.push(array1[i][0].toUpperCase() + array1[i].slice(1).toLowerCase())
// }
//  var result = titleCase.join(" ");
//  console.log(result);

//  var fruit = "watermelon";
//  var fruits = ["mango","banana","pineapple","apple","coconut","chickoo"]
// console.log(fruit.length);
// console.log(fruits.length);

// var fruit = "mangos";
//   var fruits = [ "apple","banana","grapes"]
//  console.log(fruit.length);
// console.log(fruits.length);

// var slicedFruit = fruits.slice(-4,-2);
// console.log(slicedFruit);

// var userMonth = prompt("Enter your month");
// var userMonthLength = userMonth.length;
// if(userMonthLength>3){
//     console.log(userMonth.slice(0,3))
// }

// var text = "hello my name is               Maham name"

// var textLength = text.length;
// for (var i=0 ; i<textLength; i++){
//     if(text.slice(i,i+7)=="Maham"){
//         alert("name is found")
// break
//     }
// }
// console.log(text.slice(i,i+2));
// console.log(text.slice(2,4));

// var text = "hello my name is                    Tayyaba name ";

// // //  1, 8 
// // //  0 , 2  he
// // //  1 , 3  el
// // // 2 , 4  ll

// // // 16 , 18  "  "

// var textLength = text.length;
// for(var i =0 ;i<textLength; i++){
//     if(text.slice(i,i+7)== "Tayyaba"){
//       alert("name is found")
//       break;
//     };
// }
//     console.log(text.slice(i,i+2));
//     console.log(text.slice(2,4));

// var cityToCheck = "boston";
//  var firstChar = cityToCheck.slice(0, 1);
//  var otherChars = cityToCheck.slice(1);
//  firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//  var cappedCity = firstChar + otherChars;
// console.log(cappedCity)

// var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
//  break;
//  }
//  }

// var text = "MahamKanwal"
// for (var i = 0; i < text.length; i++) {
//      if (text.slice(i, i + 12) === "World War II") {
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//      }
//     }

// var text = "To be or not to be.";
//  var segIndex = text.lastIndexOfIndexOf("be");
//  console.log(segIndex)

// let str = "hello world";
// let substring1 = "world";
// let substring2 = "javascript";

// console.log(str.indexOf(substring1)); // Output: 6
// console.log(str.indexOf(substring2)); // Output: -1

// var text = "Ali is husband  of Fatima Zehra";
// for (var i = 0; i < text.length; i++){
//     if(text.charAt(i) === "!"){
//         alert("Exclamation point found");
//         break;
//     }
// }

// while loops

// var correctPass = "Class123";
// var userPass = " ";
// while(userPass !== correctPass){
//     userPass = prompt("Enter your password")

// if(userPass === correctPass){
// alert("Access granted")
// }

// }

// for of loops

// var numbers = [2, 3, 4, 5, 6];
// for(var value of numbers){
//     if(value !== 10){
//         alert("10 is not present")
//     }
// }

// var numbers = [2, 3, 4, 5, 6];
//  for(var value of numbers){
//     console.log(value);
//     if(value == 10){
//         alert("10 is not present")
//     }
//     else{
//         alert("10 is not present")
//     }
//  }

Swal.fire({
    title: "Submit your Github username",
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
    preConfirm: async (login) => {
      try {
        const githubUrl = `
          https://api.github.com/users/${login}
        `;
        const response = await fetch(githubUrl);
        if (!response.ok) {
            return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
            }
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`
              Request failed: ${error}
            `);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          });
        }
      });
      
    //   Swal.fire({
    //     title: "Custom width, padding, color, background.",
    //     width: 600,
    //     padding: "3em",
    //     color: "#716add",
    //     background: "#fff url(/images/trees.png)",
    //     backdrop: `
    //       rgba(0,0,123,0.4)
    //       url("/images/nyan-cat.gif")
    //       left top
    //       no-repeat
    //     `
    //   });

// non primitive or reference
// var array1 = [1,2,3];
// var array2 = array1;
// array1.push(4)
// console.log(array1);
// console.log(array2);

// var num1 = 2;
// var num2 = num1;
// num1 = num1 + 5;
// console.log(num1);
// console.log(num2);

// var cities = ["karachi","islamabad","lahore"]
// var userCity = prompt("What's your city").toLowerCase()
// for(var i = 0;i<cities.length; i++){
//     if(cities[i] == userCity){
//         alert("your city is found");
//         break;
//     }
// }

// var stuNames = "maHnoOr jaweriya noor";
// var array1 = stuNames.split(" ");
// for(var i=0; i<array1.length; i++){
//     console.log(array1[i][0].toUpperCase()+array1[i].slice(1).toLowerCase());
// }



//   EVENTS



// function fillCity() {
//      var cityName;
//      var zipEntered = document.getElementById("zip").value;
//      switch (zipEntered) {
//         case "60608":
//            cityName = "Chicago";
//            break;
//         case "68114":
//            cityName = "Omaha";
//            break;
//         case "53212":
//            cityName = "Milwaukee";
//      }
//      document.getElementById("city").value = cityName;
//   }