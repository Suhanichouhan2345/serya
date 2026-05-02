
let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(data){
   // console.log(data.key);
   h1.textContent = data.key;
    if(data.key === " "){
      h1.textContent = "SPC";
    }
});