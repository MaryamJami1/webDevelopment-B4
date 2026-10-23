// console.log("Maryam");
// console.log(20 + 20);

// alert("Hello Class!")
// alert(20  + 80)


// addition = 20 + 20
// console.log(addition);

// subtraction = 20 - 10
// console.log(subtraction);


// legal variables
// studentName = "fatima" 
// student_name = "zuraiz"
// student1 = "nimrah"
// my$price = 390

// illegal variables

// student name = ""
// student@ = ""
// 3student = ""
// my-student = ""
// if = ""


// js is case sensitive
// age = 20
// console.log(age);
// Age = 30
// console.log(Age);





// var Class = "Web development"
// console.log(Class);

// // reassign update
// Class = "Computer OPERATOR"
// console.log(Class);



// redclare
// var group = "Saad Groups"
// console.log(group);

// var group = "Zuraiz Group"
// console.log(group);



// declare without value
// var home;
// console.log(home);

// home = "Sweet Home"
// console.log(home);







// Let

// let car = "Tesla"
// console.log(car);

// reasign
// car = "Civic"
// console.log(car);


// redclare
// let group1 = "Saad Groups"
// console.log(group);

// let group1 = "Zuraiz Group"
// console.log(group);



// declare without value
// let home2;

// console.log(home2);

// home2 = "Sweet Home"
// console.log(home2);


// Const
// reasign
// const birthYear = 2020
// birthYear = 2021
// console.log(birthYear);

// declare without value not allow
// const age;
// console.log(age);

// redeclare
// const year = 2021;
// console.log(year);
// const year = 2021



// Data Types

// string
let studentName = "Fatima"
console.log(studentName);

console.log(typeof (studentName));


// number
let rollNo = 34678
console.log(rollNo);
console.log(typeof (rollNo));


// boolean true and false 

let isMaried = false
// console.log(isMaried);
console.log(typeof (isMaried));


// let addition = true
// let addition2 = false

// console.log(addition + addition2);



let car;
console.log(car);
console.log(typeof (car));

//undefine

let shop = null;
console.log(shop);
//null
console.log(typeof (shop));




// Stirngs
let userName = "Maryam jamil";
let username = 'Maryam jamil';
let user_name = `Maryam jamil`;
console.log(userName);




// String concatination

let firstName = "Fahad"
let lastname = "sheikh"
let fullName = firstName + " " + lastname

console.log(fullName);



// let num1 = "6"
// let num2 = "8"
// console.log(num1 - num2);  NAN not a number



// let Age = 20;
// let sentence = "I am " + Age + " years old!"
// console.log(sentence);




// Template literals ``
let name = "Ali"
let aliAge = 20


//  my name is ali and i am 20 years old!
console.log("My name is" + " " + name + " " + "and i am" + " " + aliAge + " " + "years old!");
console.log(`My name is ${name} and i am ${aliAge} years old`);



// alert("welcome js land..\nHello world")


// document.write("<p>My world!</p>")


// let email = "maryamjamil@gmail.com"
// alert("my email adress is " + email)
// alert(`my email adress is ${email}`)


// string indexing
// har letter ek position dena that starts with 0

let subject = "Javascript is a programming language";
console.log(subject);
console.log(subject[4]);

// string length
console.log(subject.length);

// last character
console.log(subject[subject.length - 1]);
console.log(subject[subject.length]);



// String methods

let car2 = "civic"
let uppercase2 = car2.toUpperCase() //CIVIC


console.log(car2.toUpperCase());
console.log(uppercase2);

let car1 = "CIVIC"
let uppercase = car1.toLowerCase() //civic
console.log(uppercase);

let message = "Welcome to JavaScript , My favourite language is JavaScript";
console.log(message.includes("JavaScript"));
console.log(message.includes("to"));
console.log(message.includes("!"));


let text = "Hello  World";
//0123456 
console.log(text.indexOf("World"));


let sentence = "i LOVE JavaScript"
console.log(sentence.slice(2, 6));

let text1 = "I like cats";
let text2 = text1.replace("cats", "dogs");
console.log(text2);

console.log(text2.replace("like", "love"));







let text4 = "             Hello World             ";
console.log(text4.trim());



let text5 = "Hello";
console.log(text5.charAt(0));
console.log(text5.charAt(3));



let text6 = "JavaScript is easy";
console.log(text6.startsWith("J"));
console.log(text6.endsWith("easy"));


let text7 = "I love JavaScript this is a programming language";
console.log(text7.split("a"));


let greet = "Hello ";
console.log(greet.repeat(10));




// Number Data type
let age = "20";
let price = 1500;
let percentage = 85.5;
let temperature = -10;

console.log(typeof (age));
console.log(typeof (price));
console.log(typeof (percentage));
console.log(typeof (temperature));


// Arithemetic Operators
// addition +

// let num1 = 10
// let num2 = 5
// let num3 = 20
// let num4 = 60

// let result = num1 + num2 + num3 + num4
//    //operands  //operator //operands 
// console.log(result);

// //subtarction

let num5 = 10
let num6 = 5
let num7 = 20
let num8 = 60

let result2 = num5 - num6 - num7 - num8
//operands  //operator //operands 
console.log(result2);

//multiplication

let num9 = 2
let num10 = 4
let num11 = 6
console.log(num9 * num10 * num11);


// division
let num12 = 20
let num13 = 4
console.log(num12 / num13);


// modulus
let num14 = 20
let num15 = 3
console.log(num14 % num15);


// exponention
let num16 = 4
let num17 = 2
let num18 = 6
console.log(num16 ** num17 ** num18);





let num19 = "twenty" // not allow
let num20 = "20"   //type conversion

console.log("100" + 100);   //concatination
console.log("100" + "100"); //concatination
console.log("100" - 100); //string chnage into number (type conversion)
console.log("100" - "50"); //string change into number(type conversion)
console.log("100" * 2); //string change into number(type conversion)
console.log("100" / 2); //string change into number(type conversion)
console.log("100" % 3); //string change into number(type conversion)
console.log("100" - "hundred");// Invalid numeric String
console.log("Hello" * 2); //Invalid numeric String
console.log("10" + 5 - 5); //Left-to-right Concatenation
console.log(10 + 5 + "5");  //string



// number methods
// toFixed()
let price2 = 99.5872;
// console.log(price2);
console.log(price2.toFixed(2));

// string
let price3 = 26
console.log(typeof (price3));
console.log(typeof (price3.toString()));



// isInteger
// console.log(Number.isInteger(price3));      //true
// console.log(Number.isInteger(20.5));    //false
// console.log(Number.isInteger(-10));     //true
// console.log(Number.isInteger("20"));    //false
// console.log(Number.isInteger(20.0));     //true 




// console.log(Number.isNaN(100));     //false
// console.log(isNaN("hello"));    //true
// console.log(Number.isNaN(100 - "Hello"));
//                               // NAN


// // Math.round()
// // console.log(Math.round(7.256)); 
// // console.log(Math.round(8.556));
// // console.log(Math.round(10.856));

// // Math.ceil
// // console.log(Math.ceil(4.0));
// // console.log(Math.ceil(4.56));
// // console.log(Math.ceil(4.94));
// // console.log(Math.ceil(4));


// console.log(Math.floor(8.1));
// console.log(Math.floor(9.5));
// console.log(Math.floor(13.9));
// console.log(Math.floor(6.0));




// // let value = 9
// // value = value + 1
// // console.log(value);


// // // increament operator
// // let value2 = 9
// // // value = value + 1
// // value2++
// // console.log(value2);


// // let value3 = 9
// // value3 = value3 - 1
// // console.log(value3);

// // // decreament operator
// let value4 = 9
// // value3 = value3 - 1
// value4--
// console.log(value4);


// let a = 5;
// console.log(a++);  //5
// console.log(a++);//6
// console.log(a);//7


// let b = 5;
// console.log(++b);//6
// console.log(++b);//7
// console.log(b);//7



// // post increament
// let c = 5;
// console.log(c);  //5

// let d = c++;
// console.log(c); //6
// console.log(d); //5

// // d ko purani value mili, jabke c increase ho gaya.

// // pre increaemnt
// let e = 5;
// console.log(e);    //5

// let f = ++e;      //6
// console.log(e);   //6
// console.log(f)    //6




// // post decreament

// let g = 10;
// console.log(g--); //10
// console.log(g);   //9



// // pre decreament

// let h = 10;
// console.log(--h); //9
// console.log(h);   //9




let a = 3; //4
let b = 2; //3
let result = a++ + ++b + a;
//3 + 3 + 4
//6 + 4
//10

console.log(a);
console.log(b);
console.log(result);






let grade = 400
// grade = grade + 100
grade += 100
console.log(grade);






let grade2 = 400
// grade = grade - 100
grade2 -= 100
console.log(grade2);





let grade3 = 400
// grade = grade * 100
grade3 *= 100
console.log(grade3);



let grade4 = 400
// grade = grade / 100
grade4 /= 100
console.log(grade4);


let num = 10;  //15

num += 5;
console.log(num);   //15

num -= 3;
console.log(num);  // 12

num *= 2;
console.log(num);  //24

num /= 4;
console.log(num);  //6





// comparison operators


// let marks = 75;

// console.log(marks > 50);
// console.log(marks < 50);
// console.log(marks >= 75);
// console.log(marks <= 70);
// console.log(marks === 75);



// console.log(5 != "5");     //false 
// console.log(5 !== "5");  //true
// console.log(10 != 20);    //true
// console.log(10 !== 10);  //false


console.log(0 == false);     //true
console.log(0 === false);     //false
console.log("10" > 5);       //true
console.log("20" < "3");   //true
console.log(20 < 3);  //false
console.log(null == undefined);  //true
console.log(null === undefined);  //false
console.log(1 == true); // true









// conditions
// if else

// let age3 = +prompt("Enter your age for voting!")

// if(age3 >= 18){
//    alert("you are eligilbe for voting!")
// }else{
//    alert("you are not eligilbe for voting!")
// }




// let maryam = prompt("Order your food")


// if (maryam === "biryani") {
//    console.log("Biryani ly kar ghr ajao!");
// }
// else if (maryam === "pizza") {
//    console.log("pizza ly kar ghr ajao!");
// }
// else if (maryam === "burger") {
//    console.log("burger ly kar ghr ajao!");
// }
// else {
//    console.log("ghr ao ammi se pitwaungi");
// }


// multiple conditions
// if(){

// }else if(){

// }else if(){

// }else{

// }






// Nested Conditions
// let card = "IDcard"
// let pen = "pencil"

// if (pen === "pen") {
//    if (card === "IDcard") {
// alert("you can enter the class")
//    }
//    else {
// alert("you can not enter the class because ypu have not a id card" )
//    }
// } else {
//    alert("you have not a pen!")

// }


// logical opeartors
// or and not