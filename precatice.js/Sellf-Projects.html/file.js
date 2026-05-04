let btn = document.querySelector("#btn");
let filein = document.querySelector("#finemp")
let h1 = document.querySelector("h6");

btn.addEventListener("click",function(){
    filein.click();
})

filein.addEventListener("change",function(details){
    //console.log(details);
    h1.textContent=details.target.files[0].name;
})