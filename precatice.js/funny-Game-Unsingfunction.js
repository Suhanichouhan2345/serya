/*
🎮 1. Lucky Draw Game

👉 Function random number generate kare (1–10)
👉 User number pass kare
👉 Match hua → "You Win 🎉"
👉 nahi → "Try Again"
*/

const game = (val) =>{
let num = Math.floor(Math.random() * 6) + 1;
    if(val === num)
        return `Both number are same  \n you Winner ${val} and ${num}`;
    return `Both number are diffrent  \n you loss ${val} and ${num} \n Try Again \n Don't lose a hope` ;
}
//console.log(game(6));

/*
🎲 2. Dice Game

👉 Function 1–6 random number nikale
👉 6 aaya → "Jackpot!"
👉 warna → "Rolled: X"
*/

let jack = () =>{
    let random = Math.floor(Math.random()*6 +1);
    if( random == 6) return `Jackpot 🎉 ${random}`;
    return `Rolled : x ${random}`
}
//console.log(jack());

/*
🧠 3. Mind Reader Trick

👉 Function me number lo
👉 agar number even → "I knew it's even 😎"
👉 odd → "I knew it's odd 😎"
*/

let ev = (val) =>{
    if(val%2==0) return "I knew it's even 😎";
    return  "I knew it's odd 😎";
}
//console.log(ev(8));

//calculater 
let calculate = (num1 , num2, opreater) =>{
if(opreater == "+") return num1 + num2 ;
if(opreater == "-") return num1 - num2 ;
if(opreater == "*") return num1 * num2 ;
if(opreater == "/") return num1 / num2 ;
if(opreater == "%") return num1 % num2 ;
}
//console.log(calculate(2,2,"*"));


// mood sing game 
let mood = () =>{
    let mod = Math.floor(Math.random()*6);
    if(mod == 1) return "Happy 😄";
    if(mod == 2) return "Chill 😎";
    if(mod == 3) return "normal 😎";
    if(mod == 4) return "Sad 😢";
    if(mod == 5) return "Angry 😡";
    return "iske liye koi mood nhi outof boundary";
}
//console.log(mood());