// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i<smallImages.length;i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log('value of image no. ${i} is changed.');
// }

// document.getElementsByTagName("p");
// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// let para = document.querySelector('p');


//practice set

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm a Blue h3! ";
document.querySelector("body").append(h3);

h3.classList.add("blue");