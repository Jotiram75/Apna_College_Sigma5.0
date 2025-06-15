//functions

function hello(){
    console.log("Hello");
}

// hello();
// hello();
// hello();
// hello();
// hello();

function printPoem(){
    console.log("Twinkle Twinkle ,Little Star");
    console.log("How I Wonder what you are");
}

// printPoem();

function rollDice(){
    let random =Math.floor(Math.random()*6)+1;
    console.log(random);
}

// rollDice();

// functional Arguments
function printname(name){
    console.log(name);
}

printname("Joti");

function printinfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printinfo("Joti",23);

function sum(a,b){
    console.log(a+b);
}
sum(2,1);
sum(3,5);
sum(5,6);

//practice set
function average(a,b,c){
    console.log((a+b+c)/3);
}
average(1,2,3);

//practice set
function table(n){
    for(let i=1;i<=10;i++){
        l=i*n;
        console.log(`${n}*${i}=${l}`);
    }
}
table(2);

//return
 function sub(a,b){
    return a-b;
 }
 console.log(sub(2,3));


 //practice set
 function sumn(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
 }
 console.log(sumn(10));

 //str concate ///global scope

 let str=["Hii","Hello","!"];//global scope

 function concate(str){
    let result="";//function scope
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
 }
//  console.log(result);
 console.log(concate(str));

 //block scope
 for(let i=0;i<=5;i++){
    console.log(i);
 }
//  console.log(i);

let greet="hello";//global scope

function changegreet(){
    let greet="namste";//function scope
    console.log(greet);
    function innergret(){
        console.log(greet);//lexical scope

    }
    innergret()
}

console.log(greet);
changegreet();
// innergret();

//function expresion  //nameless function
let sum1 = function(a,b){
    return a+b;
}
console.log(sum(1,2));

//higher order fun
//multiple time call function

function multiplegreet(fun,count){
    for(let i=1;i<=count;i++){
        mgreet();
    }
}

let mgreet=function(){
    console.log("Hello");
}


multiplegreet(mgreet,10);

//higher order function returns
//function factory




function oddorevenfactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }

        return odd;
    }else if(request == "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("wrong request");
    }
}
let request="odd"; //even
let fun = oddorevenfactory(request);
console.log(fun(3));

//methods

const calculator={
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }

};
console.log(calculator.add(2,4)); 



//this keywords

const student={
    name:"Joti",
    age:23,
    eng:95,
    math:93,
    phy:97,
    getavg(){
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
console.log(student.getavg());

//try catch
console.log("Hello");
try{
    console.log(j);
}catch(err){
    console.log("Catch the error.....");
    console.log(err);
}
console.log("Hello");

//arrow function

const sum3=(a,b)=>{
return a+b;
}
console.log(sum3(3,6));

const mul=(a,b)=>a*b;
console.log(mul(3,6));

//set time out

// setTimeout(()=>{
//     console.log("After 3sec");
// },3000);

// console.log("Welcome To");

//set interval

// let id=setInterval(()=>{
//     console.log("Shinde");
// },1000);

// console.log(id);

//this with arrow function



//practice set

let square=(n)=>{
    return n*n;
}
console.log(square(2));

// let id =setInterval(()=>{
//     console.log("Hello World");
// },2000)

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("Clear interval run");
// },10000);


//array methods
let arr=[1,2,3,4,5];

// arr.forEach((el)=>{
//     console.log(el);
// });

let print = function(el){
    console.log(el);
};

arr.forEach(print);

let arr1=[{
    name:"ram",
    marks:90,
},
{
    name:"ramesh",
    marks:91,
},
{
    name:"sham",
    marks:92,
}];

//for each
arr1.forEach((student)=>{
    console.log(student.marks);
});

let num=[1,2,3,4];


//map

let double = num.map((el)=>{
    return el*el;
});

console.log(double);

//filter

let nums=[1,2,3,4,5,6,7,8,9,10,11,12];
let ans = nums.filter((el)=>{
return el % 2!=0;
});
console.log(ans);

//every and sum

console.log([1,2,3,4].every((el)=>(el%2==0)));

console.log([1,2,3,4].reduce((res,el)=>(res+el)));

//max
let nums1=[1,2,3,4,5,8,9,14];
let max1=nums1.reduce((max,el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
});
console.log(max1);

//spread 
let arrr=[1,2,3,4,5];
let newarr=[...arrr];
console.log(newarr);

let newnum=[...newarr, ...nums1];
console.log(newnum);

let newnumsobj={...newnum};
console.log(newnumsobj);

//rest

function sum4(...args){
    return args.reduce((sum,el)=>sum+el);
}


function min(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if (min>el){
            return el;
        }else{
            return min;
        }
    });
};

//destructuring 