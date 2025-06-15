let a="          Hello              ";
console.log(a);

console.log("Hello World");

let b=a.trim(); // removes whitespace from both sides of a string
console.log(b);
console.log(a);

let msg = "Ilove";
console.log(msg.indexOf("love")); // length of string

console.log(msg.indexOf("e"));
console.log(msg.indexOf("z"));

console.log(msg.toLowerCase());
console.log(msg.toUpperCase());

//method chaining

let newa = a.trim().toUpperCase(); // removes whitespace from both sides of a string and converts to uppercase
console.log(newa);

//slice

console.log(msg.slice(1,3));
console.log(msg.slice(3));

console.log(msg.slice(-1));


//replace

let msgnew = "I love JavaScript";
console.log(msgnew.replace("JavaScript", "Python")); // replaces first occurrence of string
console.log(msgnew.repeat(2));


//Practice set 1

let msg2="help!";
console.log(msg2.trim().toUpperCase());



// arrays

let students = ["Joti","Ram","Shinde","Shivaji"];
console.log(students);

let num=[1,2,3,4,5,6,7,8,9,10];
console.log(num);

let info = ["Jotiram",23,"Neware","SBPCOE"];
console.log(info);

let empty=[];
console.log(empty);

let name=["Rohit","Shivaji","Shinde"];
name[0]="Shivaji"; // replaces first element of array
console.log(name[0]);


name.push("Joti");
console.log(name); // adds element to end of array

name.pop();
console.log(name); // removes last element of array

name.shift(); // removes first element of array
console.log(name); // removes first element of array

console.log(name.length); // length of array


let month=["january","july","march","august"];
console.log(month);

month.shift();
console.log(month); // removes first element of array
month[1]="june";
console.log(month); // replaces second element of array
month[2]="march";
month.push("august");
console.log(month); // adds element to end of array

month.unshift("jan"); // adds element to beginning of array
console.log(month); // adds element to beginning of array


month.indexOf("jan");
console.log(month.indexOf("jan")); // returns index of element in array

let cont=name.concat(month); // concatenates two arrays
console.log(cont); // concatenates two arrays

cont.reverse(); // reverses array
console.log(cont); // reverses array

console.log(cont.slice); // slices array
console.log(cont.slice(1,3)); // slices array
console.log(cont.slice(1)); // slices array

console.log(cont.slice(-1)); // slices array
console.log(cont.slice(-2)); // slices array

//splice
 let color=["red","blue","green","black","white"];
console.log(color); // prints array

color.splice(3);
console.log(color); // removes elements from index 3 to end of array

color.splice(2,1,"yellow","black"); // removes 1 element from index 2 and adds "yellow"
console.log(color);

color.splice(0,0,"yellow","black"); // removes 1 element from index 2 and adds "yellow"
console.log(color);

//sort
let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
console.log(days); // prints array

days.sort(); // sorts array in ascending order
console.log(days); // prints array

let cars=["audi","bmw","mercedes","toyota","honda"];
console.log(cars); // prints array
cars.sort(); // sorts array in ascending order


let num1=[1,2,3,4,5,6,7,8,9,10];
console.log(num1); // prints array  
num1.sort(); // sorts array in ascending order


//practice set 2
console.log(month); // prints array
month.splice(0,1,"january");
month.splice(2,1);
console.log(month); // prints array

month.splice(0,1);
month.splice(1,0,"june");
console.log(month); // prints array

let lang=["c","c++","html","javascript","python","java","c#","sql"];
console.log(lang); // prints array

lang.reverse(); // reverses array
console.log(lang.indexOf("javascript"));
console.log(lang); // prints array

//refernces
 let arr=["a","b","c","d"];
let arrCopy=arr; // copies array
console.log(arrCopy); // prints array
arr[0]="z"; // changes first element of array
console.log(arrCopy); // prints array
console.log(arr); // prints array

arrCopy=["e","f","g","h"]; // changes array
console.log(arr); // prints array
console.log(arrCopy); // prints array

//constant

const pi=3.14; // constant
console.log(pi); // prints constant

const arr1=[1,2,3]; // constant array
console.log(arr1); // prints constant array

arr1.push(4); // adds element to array
console.log(arr1); // prints array
arr1[0]=5; // changes first element of array
console.log(arr1); // prints array

//nested array
let num2=[[2,4],[3,46],[4,8]];
console.log(num2);

console.log(num2[0][0]);

//practice set 3
let gamettt=[['X',null,'0'],[null,'X',null],['0',null,'X']];
console.log(gamettt);

console.log(gamettt[0][1]='0');


//loops
for(let i=0;i<=10;i++){
    console.log(i);
}

for(let i=15;i>=1;i--){
    console.log(i);
}


//odd numbers
for(let i=1;i<=15;i=i+2) {
    console.log(i);
}

console.log("Backward");
for(let i=15;i>=1;i=i-2) {
    console.log(i);
}
console.log("even");
//even numbers
for(let i=2;i<=10;i=i+2) {
    console.log(i);
}
console.log("Backward");
for(let i=10;i>=2;i=i-2) {
    console.log(i);
}
console.log("multiplication");
for(let i=5;i<=50;i=i+5) {
    console.log(i);
}

// let n=prompt("Write your number");
// n=parseInt(n);
// console.log("Table of "+n);

// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }

//nested loops
for(let i=1; i<=5;i++){
    console.log("Outer Loop"+i);
    for (let i=1;i<=5;i++){
        console.log(i);
    }
}


//while loop
console.log("while Loop");

let i=0;
while(i<=20){
    console.log(i);
    i++
}


// Game
// const favuorite ="Avatar";
// let guess=prompt("Guess My Favuorite Movie");
// while((guess!=favuorite)&&(guess!='quit')){
//     guess=prompt("Wrong Guess. Please Try Again");
    
// }

// if(guess==favuorite){
//     console.log("Congrats!!");
// }else{
//     console.log("You Exit The Game");
// }


//Loops with Array
let fruits=["Mango","Apple","Banana","Litchi","Orange"];

for(let i=0;i<fruits.length;i++){
    console.log(i, fruits[i]);
}
console.log("Reverse Array");
for(let i=fruits.length-1;i>=0;i--){
    console.log(i, fruits[i]);
}

//nested array

let student=[["aman",95],["joti",65],["ram",90]];

for(let i=0;i<student.length;i++){
    console.log(`Info of Student #${i+1}`);
    for(let j=0;j<students[i].length;j++){
        console.log(student[i][j]);
    }
}

//for of loop
let fruits1=["Banana","Mango","Chiku"];
for(i of fruits1){
    console.log(i);
}

for(char of "JotiramShinde"){
    console.log(char);
}


//To-Do App
let todo=[];

let req=prompt("Please Enter your request");

while(true){
    if (req == "quit"){
        console.log("Quiting App");
        break;
    }
    if(req=="list"){
        console.log("____________________________________");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("____________________________________");
    }else if(req=="add"){
        let task=prompt("Please Enter the task you want to add");
        todo.push(task);
        console.log("Tassk Added");
    }else if(req=="delete"){
        let idx=prompt("Please Enter the task Index");
        todo.splice(idx,1);
        console.log("Task Deleted");
    }else{
        console.log("Wrong Request");
    }

    req=prompt("Please Enter your request");

}
