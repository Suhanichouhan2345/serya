let h1 = document.querySelector("h1");
console.dir(h1);

/*
innerHTML: "Suhani you can do it"
innerText: "Suhani you can do it"
textContent: "Suhani you can do it"*/
// they show int objec formate key and value pairs

//h1.innerText ="Don't give up hanuman ji h tare sath :)"
 h1.innerHTML ="<i>Don't give up hanuman ji h tare sath :)</i>"
//h1.textContent ="Don't give up hanuman ji h tare sath :)"
let a = document.querySelector("a");
//console.dir(a);
//a.href = "https://github.com/nitishyadav9893?tab=repositories"

a.setAttribute("href", "https://github.com/nitishyadav9893?tab=repositories");

let img = document.querySelector("img");
img.setAttribute("src" ,"https://tse1.mm.bing.net/th/id/OIP.j63x_u2GiwM5fpjA3isTAwHaD_?pid=Api&P=0&h=180");