let btn =document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
});

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color =`rgb(${red},${green},${blue})`;
    return color;
};


let p = document.querySelector("p");
p.addEventListener("click",function(){
    console.log("You Click On Paragraph");
});

let box =document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("Your Cursor on Box");
});

let btn1 = document.querySelector("#bttn");

btn1.addEventListener("dblclick",function(){
    console.log(event);
    console.log("button double clicked");
})

let wrt = document.querySelector("input");

wrt.addEventListener("keydown",function(event){
    console.log("code =",event.code);
    if(event.code == "ArrowUp"){
        console.log("character moves forward");
    }else if(event.code == "ArrowDown"){
        console.log("character moves backword");
    }else if(event.code == "ArrowLeft"){
        console.log("character moves left");
    }else if(event.code == "ArrowRight"){
        console.log("character moves right");
    }
})