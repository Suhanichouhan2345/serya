// 1. Ek function banao jo 2 numbers ka sum return kare

function sum(x,y){
    return x + y;
}
let value = sum(8,9);
//console.log(value);

// 2. Ek function likho jo even ya odd check kare

function even(a,b){
  if(a % 2 == 0 && b % 2 ==0){
    return " both evean";
  }else{
    return "both odd";
  }
}
//let result = even(2,2);
//console.log(result);

// 3. Ek function jo number ka square return kare

function square(n){
    return n * n;
}
//let result = square(2);
//console.log(result);


const square1 = (n) =>{
    return n * n;
}

//console.log(square1); // [Function: square1]
//console.log(square1(4)); //4


// 4. Ek function jo 3 numbers me se sabse bada bataye
 
 const bigNumber = (a,b,c) => {
    if(a > b && a > c){
     return a;
    } else if(b > a && b > c){
        return b;
    } else {
        return c;
    }
 }

 //console.log(bigNumber(89,54,500));

 // 5.Ek function jo factorial nikale
 const factorial = (n) =>{
    let result = 1;
    for(let i =1 ; i<=n ; i++){
      result = result * i;
    }
    return result;
 }

// console.log(factorial(5));


// 6 .Ek function jo prime number check kare
const prime = (n) => {
  if(n <= 1) return "not prime";

  for(let i = 2; i < n; i++){
    if(n % i === 0){
      return `${n} is not prime`;
    }
  }

  return `${n} is prime`;
}

//console.log(prime(2));

// 7. Ek function jo number reverse kare
const reverse = (n) => {
    let rever = 0;

    for(let i = n; i != 0; i = Math.floor(i / 10)){
        let digit = i % 10;
        rever = rever * 10 + digit;
    }

    if(rever === n){
        return `yes it is palindrome ${n}`;
    }
    return "not a palindrome";
}

//console.log(reverse(121));


//8. calculater

const calculator = (num1, num2, operator) => {
  if(operator === "+"){
    return num1 + num2;
  }else if(operator === "-"){
    return num1 - num2;
  }else if(operator === "*"){
    return num1 * num2;
  }else if(operator === "/"){
    if(num2 === 0){
      return "cannot divide by 0";
    }
    return num1 / num2;
  }else{
    return "invalid operator";
  }
}

console.log(calculator(12, 3, "+")); // 15


