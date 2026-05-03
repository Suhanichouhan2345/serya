let form = document.querySelector("form");
let inpute = document.querySelectorAll("input");
let main = document.querySelector(".main");

form.addEventListener("submit", function(data){
    data.preventDefault();


let cards = document.createElement("div");
cards.classList.add("cards");

let profile  = document.createElement("div");
profile .classList.add("profile");

let img = document.createElement("img");
img.setAttribute("src", inpute[0].value);

let h1 = document.createElement("h1");
h1.textContent= inpute[1].value

let age = document.createElement("h3");
age.textContent = inpute[2].value

let email = document.createElement("h3");
email.textContent =inpute[3].value

let Number = document.createElement("h3");
Number.textContent = inpute[4].value

profile .appendChild(img);
cards.appendChild(profile );
cards.appendChild(h1);
cards.appendChild(age);
cards.appendChild(email);
cards.appendChild(Number);

main.appendChild(cards);
inputes.forEach(function (inp){
if (inp.type !== "submit"){
    inp.val ="";
}
});

});