/*
let h1 = document.querySelector("h1");

h1.addEventListener("dblclick",function(){// for double click
    h1.style.color="red";
});
*/

/*
let inpute = document.querySelector("input");
inpute.addEventListener("input", function(){
    console.log("type");
});
*/

/*

let inpute = document.querySelector("input");

inpute.addEventListener("input", function (event) {
    console.log(event.data);
});
*/

let sel = document.querySelector("select");
let divice = document.querySelector("#divice");

sel.addEventListener("change",function(details){
   // divice.textContent ="Device Selected Done";
   divice.textContent = `${details.target.value} Are selected`;
console.log(details.target.value);
});
