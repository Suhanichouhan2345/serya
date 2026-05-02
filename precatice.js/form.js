
let form = document.querySelector("form");
form.addEventListener("submit", function(data){
    data.preventDefault();


let inpute = document.querySelectorAll("input");
inpute.forEach(function(data){
    console.log(data.value);


});
});
