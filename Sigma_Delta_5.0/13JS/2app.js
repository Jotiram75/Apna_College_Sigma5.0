// async function greet(){
//     // throw "some random error";

//     return "Hello";
// }

// greet()
//     .then((result)=>{
//         console.log("promise was resolved");
//         console.log("result was : ", result);
//     })
//     .catch((err)=>{
//         console.log("promise was rejected with err : ",err);
//     })

//     let demo = async ()=>{}; 

// async & await

// function getNum(){
//     return new Promise((resolved, reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolved();
//         },1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }

let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, rejected)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                rejected("promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed");
        }, delay);
    })
    
}

async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
    }catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a=5;
    console.log(a);
    console.log("new number : ",a+3);


}

let jsonRes = '{"fact":"Ancient Egyptian family members shaved their eyebrows in mourning when the family cat died.","length":91}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
    name : "Joti",
    marks : 95
}

console.log(JSON.stringify(student));

let url = "https://catfact.ninja/fact";


fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log("data1 = ",data.fact);
        return fetch(url);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log("data2 = ",data.fact);
    })
    .catch((err)=>{
        console.log("ERROR - ",err);
    })


let url1 = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await fetch(url1);
        let data = await res.json();
        console.log(data.fact);

        let res1 = await fetch(url1);
        let data1 = await res.json();
        console.log(data1.fact);
    }catch(e){
        console.log("error -",e);
    }
    console.log("bye");
}
