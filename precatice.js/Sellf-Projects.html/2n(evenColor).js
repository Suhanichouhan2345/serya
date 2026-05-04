// Add a highlighted class to everary item in a list.
let li = document.querySelectorAll("ul li:nth-Child(2n)");// 2n mean har 2nd
 li.forEach(function(val){
    val.classList.add("highlight");
 });
