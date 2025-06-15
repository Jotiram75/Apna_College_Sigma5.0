//object literals
console.log("Object Literals");
const student = {
    name:"Joti",
    age:23,
    marks:63,
    city:"Akluj"

};
console.log(student);

//post/threads
const post={
    username:"@jotiram75",
    content:"This is my first Post",
    likes:100,
    repost:5,
    tags:["@jotiram550","joti"]
};
console.log(post);

//get values
console.log(student["marks"]);
console.log(student.name);

//Add/update

student.city="Solapur";
console.log(student);
student.gender="Female";
console.log(student);

student.marks="A";
console.log(student);
student.marks=[50,90,80];
console.log(student);

delete student.city;
console.log(student);

delete student.marks;
console.log(student);


//object of object

const info={
    joti:{
        name:'joti',
        blood:'O',
        city:'nevare'
    },
    ram:{
        name:'ram',
        blood:'A',
        city:'nevare'
    },
    sham:{
        name:'sham',
        blood:'B',
        city:'nevare'
    }
}
console.log(info);


//array of object

let Array=[
    {
        name:'joti',
        blood:'O',
        city:'nevare'
    },
    {
        name:'ram',
        blood:'A',
        city:'nevare'
    },
    {
        name:'sham',
        blood:'B',
        city:'nevare'
    }
]
console.log(Array);

//Maths Object
console.log(Math);
let random=Math.random();
//1-10
console.log(Math.floor(random*10)+1);
//1-100
console.log(Math.floor(random*100)+1);
//1-5
console.log(Math.floor(random*5)+1);
//20-25
console.log(Math.floor(random*5)+21);


//Guessing Game

const max=prompt("Enter Max number");
const random1=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("User Quit");
        break;
    }

    if(guess==random1){
        console.log("You Are Right! Congrats!!");
        break;
    }else if(guess<random1){
        guess=prompt("You Guess Was Too Small");
    }else if(guess>random1){
        guess=prompt("You Guess Was Too Large");
    }
    else{
        guess=prompt("Your Guess Was Wrong.Please Try Again");
    }
}

