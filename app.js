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

console.log(typeof(studentName));


// number
let rollNo = 34678
console.log(rollNo);
console.log(typeof(rollNo));


// boolean true and false 

let isMaried = false
// console.log(isMaried);
console.log(typeof(isMaried));


// let addition = true
// let addition2 = false

// console.log(addition + addition2);



let car;
console.log(car);
console.log(typeof(car) );

 //undefine

let shop = null;
console.log(shop);
//null
console.log(typeof(shop) );




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
console.log(`My name is ${name} and i am ${aliAge} years old` );



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

let car2= "civic"
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
console.log(sentence.slice(2,6));

let text1 = "I like cats";
let text2 = text1.replace("cats","dogs");
console.log(text2);

console.log(text2.replace("like","love"));







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