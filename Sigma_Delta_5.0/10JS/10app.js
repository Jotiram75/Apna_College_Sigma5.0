 let btn = document.querySelectorAll("button");
 console.dir(btn);

 for (btn of btn){
    // btn.onclick = SayHello;
    // btn.onmouseenter = function(){
    //     console.log('You hover the button');
    // }

    btn.addEventListener("click",SayHello);
    btn.addEventListener("click",sayName);

    console.dir(btn);
 }
function SayHello(){
    alert("Button was clicked");
 }

 function sayName(){
    alert('Jotiram Shinde');
 }