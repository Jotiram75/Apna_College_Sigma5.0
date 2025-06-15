console.log("Hello Javascript");
console.log("Hello Jotiram");
let a = 10;
let b = 20;
console.log(a + b);
let d =50;
console.log(d);

let pencilprice=10;
let eraserprice=5;
output="The total price is: "+(pencilprice+eraserprice) +" Rupees";
console.log(output);

output=`total price is:${pencilprice+eraserprice} Rupees`;
console.log(output);


//Arithmetic Operators

let x=10;
let y=20;
let z=x+y;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y); // exponentiation operator
console.log(x++); // post increment operator
console.log(x--); // post decrement operator
console.log(++x); // pre increment operator
console.log(--x); // pre decrement operator
console.log(x+=y); // x=x+y
console.log(x-=y); // x=x-y

//operator
let a1=10;
let b1=20;
let c1=30;  
console.log(a1<b1); //less than operator
console.log(a1>b1); //greater than operator
console.log(a1<=b1); //less than or equal to operator
console.log(a1>=b1); //greater than or equal to operator
console.log(a1==b1); //equal to operator
console.log(a1!=b1); //not equal to operator
console.log(a1===b1); //strict equal to operator
console.log(a1!==b1); //strict not equal to operator
console.log(a1==c1); //equal to operator
console.log(a1!=c1); //not equal to operator


//conditional statements
console.log("before if statement ");
let j= 13;
if(j>=18){
    console.log("You are eligible to vote");
    console.log("You are eligible to drive");

}
console.log("after if statement ");



//traffic light example

let color="green";

if(color=="red"){
    console.log("Stop. Color is red");
}

if (color=="yellow"){
    console.log("Start. Color is yellow");
}

if(color=="green"){
    console.log("Go. Color is green");
}


let age1=12;

if(age1>=18   ){
    console.log("You are eligible to vote");

}else if(age1<18  ){
    console.log("You are not eligible to vote");
}

let marks= 63;

if (marks>=90){
    console.log("Grade A");

}else if(marks>=80){
    console.log("Grade B"); 
}   
else if(marks>=70){
    console.log("Grade C");
}else if(marks>=60){
    console.log("Grade D"); 
}
else if(marks>=50){
    console.log("Grade E");
}
else if(marks>=40){
    console.log("Grade F"); 
}  
else if(marks>=35){
    console.log("Grade G");
}



if (marks<35){
    console.log("Fail"); 
}else{
    console.log("Pass"); 
}




//practice set 1

let popcornsize='xl';

if(popcornsize=='s'){
    console.log("Small popcorn size is 50Rs");
}else if(popcornsize=='m'){
    console.log("Medium popcorn size is 100Rs");
}
else if(popcornsize=='l'){
    console.log("Large popcorn size is 150Rs"); 
}
else if(popcornsize=='xl'){
    console.log("Extra Large popcorn size is 200Rs");   
}
else{
    console.log("Invalid popcorn size"); 
}



//nested if else statement

let marks2= 63;

if (marks2>=35){
    console.log("You are pass");

    if(marks2>=90){
        console.log("Grade A");

    }else if(marks2>=80){
        console.log("Grade B"); 
    }   
    else if(marks2>=70){
        console.log("Grade C");
    }else if(marks2>=60){
        console.log("Grade D"); 
    }
    else if(marks2>=50){
        console.log("Grade E");
    }
    else if(marks2>=40){
        console.log("Grade F"); 
    }  
    else if(marks2>=35){
        console.log("Grade G");
    }
}


//logical operators

let marks3= 10;

if (marks3>=35 && marks3<=100){
    console.log("You are pass");
}else if(marks<35 || marks3>100){
    console.log("You are fail");
}else{
    console.log("Invalid marks"); 
}
   
// practice set 2

let str="apna college";

if(str[0]==='a' && str.length>3){
    console.log("This is a good string");
}else{
    console.log("This is not a good string");
}

let num=12;
if((num%3==0) && ((num+1==15)||(num-1==11))){
    console.log("safe");
}else{
    console.log("unsafe");
}


//true false values
if(true){
    console.log("true");
}else{
    console.log("false");
}

//switch case statement

let color2="yellow";
switch(color2){
    case "red":
        console.log("Stop");
        break;
        case "yellow":
            console.log("Ready to go");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
        break;
}   


let day=7;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console,log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//alerts

alert("This is alert message"); 
console.error("This is error message");
console.warn("This is warning message");
console.info("This is info message");


//prompt

let firstname2= prompt("Enter first Name:");
let lastname2=prompt("Enter last Name:");
// console.log("Welcome"," ",firstname2," ",lastname2);
let msg=("Welcome "+firstname2+" "+lastname2);
alert(msg);

