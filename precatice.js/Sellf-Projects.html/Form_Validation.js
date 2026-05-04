let email = document.querySelector("#email");
let passward = document.querySelector("#passward");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwardRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    let er = document.querySelector("#er");
    let pr = document.querySelector("#pr");

    let ERegex = emailRegex.test(email.value);
    let PRegex = passwardRegex.test(passward.value);

    if(!ERegex){
        er.textContent = "Invalid email";
        er.style.visibility = "visible";
    } else {
        er.style.visibility = "hidden";
    }

    if(!PRegex){
        pr.textContent = "Weak password";
        pr.style.visibility = "visible";
    } else {
        pr.style.visibility = "hidden";
    }
});

