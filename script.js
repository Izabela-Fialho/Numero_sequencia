let a = document.querySelector("#a");
let resultadoA = document.querySelector(".a");

function itemA(){
    if ( parseInt(a.value)=== 9){
         resultadoA.innerHTML= 
            `<span class= "certo">certo<span>` ;           
    }else{
        resultadoA.innerHTML= 
             `<span class= "errado">errado<span> `;  
        }
}   

let b = document.querySelector("#b") ;
let resultadoB = document.querySelector(".b");

function itemB( ){
 if ( parseInt(b.value)=== Math.pow(2,7)){
    resultadoB.innerHTML= 
        `<span class= "certo">certo<span>` ;           
     }else{
        resultadoB.innerHTML= 
         `<span class= "errado">errado<span>` ;  
        }
 }


let c = document.querySelector("#c") ;
let resultadoC = document.querySelector(".c");

function itemC( ){
 if ( parseInt(c.value)=== Math.pow(7,2)){
    resultadoC.innerHTML= 
        `<span class= "certo">certo<span>` ;           
     }else{
        resultadoC.innerHTML= 
         `<span class= "errado">errado<span>` ;  
        }
 }


let d = document.querySelector("#d") ;
let resultadoD = document.querySelector(".d");

function itemD( ){
 if ( parseInt(d.value)=== Math.pow(10,2)){
    resultadoD.innerHTML= 
        `<span class= "certo">certo<span>` ;           
     }else{
        resultadoD.innerHTML= 
         `<span class= "errado">errado<span>` ;  
        }
 }

let e = document.querySelector("#e") ;
let resultadoE = document.querySelector(".e");

function itemE( ){
 if ( parseInt(e.value)=== 13){
    resultadoE.innerHTML= 
        `<span class= "certo">certo<span>` ;           
     }else{
        resultadoE.innerHTML= 
         `<span class= "errado">errado<span>` ;  
        }
 }

let f = document.querySelector("#f") ;
let resultadoF = document.querySelector(".f");

function itemF( ){
 if ( parseInt(f.value)=== 200){
    resultadoF.innerHTML= 
        `<span class= "certo">certo<span>` ;           
     }else{
        resultadoF.innerHTML= 
         `<span class= "errado">errado<span>` ;  
        }
 }