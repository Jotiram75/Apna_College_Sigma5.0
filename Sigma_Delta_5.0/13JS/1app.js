let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColoChange){
    setTimeout(() => {
        h1.style.color = color;
        nextColoChange();
    }, delay);
};


// changeColor("red",1000, () => {
//     changeColor("green",1000, () => {
//         changeColor("orange",1000);
//     });
// });

// callback hell

// setTimeout(()=>{
//     h1.style.color = "red";
// }, 1000);

// setTimeout(()=>{
//     h1.style.color = "green";
// }, 2000);

// setTimeout(()=>{
//     h1.style.color = "orange";
// }, 3000);

//databases

// function saveToDB(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
    
// };

// saveToDB("Jotiram Shinde", () => {
//     console.log("Success1 : your data was saved");
//     saveToDB(
//         "Hello world", ()=>{
//             console.log("Success2 : Data2 Saved");
//         }, ()=>{
//             console.log("failure2 : Weak connection.data was not saved")
//         }
//     )
// }, () => {
//     console.log("failure1 : Weak connection.data was not saved")
// });


//promises

// function saveToDB(data){
//     return new Promise((success, failure)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if (internetSpeed>4){
//             success("success : data was saved");
//         }else{
//             failure("failure : weak connection");
//         }
//     });
// }

// console.log(saveToDB("Jotiram Shinde"));

// saveToDB("Jotiram Shinde")
//     .then((result)=>{
//         console.log("data1 saved");
//         console.log("result of promise : ", result);
//         return saveToDB("Hello World");
//     })
//     .then((result)=>{
//         console.log("data2 saved");
//         console.log("result of promise : ", result);
//         return saveToDB("Shinde1");
//     })
//     .then((result)=>{
//         console.log("data3 saved");
//         console.log("result of promise : ", result);
//     })
//     .catch((error)=>{
//         console.log("promise was rejected");
//         console.log("error of promise : ", error);
//     });
