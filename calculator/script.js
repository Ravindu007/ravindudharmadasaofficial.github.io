let add = false; 
let minus  = false;
let multiply = false;
let divide = false; 

let answer = 0;

let displayboard = document.getElementById("displayboard");



let zero = document.getElementById("zero");
zero.addEventListener("click", function(e){
  let number1 = displayboard.innerHTML;
  if(add){    
    displayboard.innerHTML += "0";
    answer = parseInt(number1) + 0;
    add = false;
  }else if(minus){
    displayboard.innerHTML += "0";
    answer = parseInt(number1) - 0;
    minus = false;
  }else if(multiply){
    displayboard.innerHTML += "0";
    answer = parseInt(number1) * 0;
    multiply = false;
  }else if(divide){
    displayboard.innerHTML += "0";
    answer = parseInt(number1) / 0;
    divide = false;
  }else{
    displayboard.innerHTML = "0";
  }
})

let one = document.getElementById("one");
one.addEventListener("click", function(e){
  let number1 = displayboard.innerHTML;
  if(add){    
    displayboard.innerHTML += "1";
    answer = parseInt(number1) + 1;
    add = false;
  }else if(minus){
    displayboard.innerHTML += "1";
    answer = parseInt(number1) - 1;
    minus = false;
  }else if(multiply){
    displayboard.innerHTML += "1";
    answer = parseInt(number1) * 1;
    multiply = false;
  }else if(divide){
    displayboard.innerHTML += "1";
    answer = parseInt(number1) / 1;
    divide = false;
  }else{
    displayboard.innerHTML = "1";
  }
})

let two = document.getElementById("two");
two.addEventListener("click", function(e){
  let number1 = displayboard.innerHTML;
  if(add){    
    displayboard.innerHTML += "2";
    answer = parseInt(number1) + 2;
    add = false;
  }else if(minus){
    displayboard.innerHTML += "2";
    answer = parseInt(number1) - 2;
    minus = false;
  }else if(multiply){
    displayboard.innerHTML += "2";
    answer = parseInt(number1) * 2;
    multiply = false;
  }else if(divide){
    displayboard.innerHTML += "2";
    answer = parseInt(number1) / 2;
    divide = false;
  }else{
    displayboard.innerHTML = "2";
  }
})

let three = document.getElementById("three");
three.addEventListener("click", function(e){
  let number1 = displayboard.innerHTML;
  if(add){    
    displayboard.innerHTML += "3";
    answer = parseInt(number1) + 3;
    add = false;
  }else if(minus){
    displayboard.innerHTML += "3";
    answer = parseInt(number1) - 3;
    minus = false;
  }else if(multiply){
    displayboard.innerHTML += "3";
    answer = parseInt(number1) * 3;
    multiply = false;
  }else if(divide){
    displayboard.innerHTML += "3";
    answer = parseInt(number1) / 3;
    divide  =false;
  }else{
    displayboard.innerHTML = "3";
  }
})

let four = document.getElementById("four");
four.addEventListener("click", function(e){
  let number1 = displayboard.innerHTML;
  if(add){    
    displayboard.innerHTML += "4";
    answer = parseInt(number1) + 4;
    add = false;
  }else if(minus){
    displayboard.innerHTML += "4";
    answer = parseInt(number1) - 4;
    minus = false;
  }else if(multiply){
    displayboard.innerHTML += "4";
    answer = parseInt(number1) * 4;
    multiply  = false;
  }else if(divide){
    displayboard.innerHTML += "4";
    answer = parseInt(number1) / 4;
    divide = false;
  }else{
    displayboard.innerHTML = "4";
  }
})

let five = document.getElementById("five");
five.addEventListener("click", function(e){
  let number1 = displayboard.innerHTML;
  if(add){    
    displayboard.innerHTML += "5";
    answer = parseInt(number1) + 5;
    add = false;
  }else if(minus){
    displayboard.innerHTML += "5";
    answer = parseInt(number1) - 5;
    minus = false;
  }else if(multiply){
    displayboard.innerHTML += "5";
    answer = parseInt(number1) * 5;
    multiply = false;
  }else if(divide){
    displayboard.innerHTML += "5";
    answer = parseInt(number1) / 5;
    divide = false;
  }else{
    displayboard.innerHTML = "5";
  }
})

let six = document.getElementById("six");
six.addEventListener("click", function(e){
  let number1 = displayboard.innerHTML;
  if(add){    
    displayboard.innerHTML += "6";
    answer = parseInt(number1) + 6;
    add = false;
  }else if(minus){
    displayboard.innerHTML += "6";
    answer = parseInt(number1) - 6;
    minus = false;
  }else if(multiply){
    displayboard.innerHTML += "6";
    answer = parseInt(number1) * 6;
    multiply = false;
  }else if(divide){
    displayboard.innerHTML += "6";
    answer = parseInt(number1) / 6;
    divide = false;
  }else{
    displayboard.innerHTML = "6";
  }
})

let seven = document.getElementById("seven");
seven.addEventListener("click", function(e){
  let number1 = displayboard.innerHTML;
  if(add){    
    displayboard.innerHTML += "7";
    answer = parseInt(number1) + 7;
    add = false;
  }else if(minus){
    displayboard.innerHTML += "7";
    answer = parseInt(number1) - 7;
    minus = false;
  }else if(multiply){
    displayboard.innerHTML += "7";
    answer = parseInt(number1) * 7;
    multiply = false;
  }else if(divide){
    displayboard.innerHTML += "7";
    answer = parseInt(number1) / 7;
    divide = false;
  }else{
    displayboard.innerHTML = "7";
  }
})

let eight = document.getElementById("eight");
eight.addEventListener("click", function(e){
  let number1 = displayboard.innerHTML;
  if(add){    
    displayboard.innerHTML += "8";
    answer = parseInt(number1) + 8;
    add = false;
  }else if(minus){
    displayboard.innerHTML += "8";
    answer = parseInt(number1) - 8;
    minus = false;
  }else if(multiply){
    displayboard.innerHTML += "8";
    answer = parseInt(number1) * 8;
    multiply = false;
  }else if(divide){
    displayboard.innerHTML += "8";
    answer = parseInt(number1) / 8;
    divide = false;
  }else{
    displayboard.innerHTML = "8";
  }
})

let nine = document.getElementById("nine");
nine.addEventListener("click", function(e){
  let number1 = displayboard.innerHTML;
  if(add){    
    displayboard.innerHTML += "9";
    answer = parseInt(number1) + 9;
    add = false;
  }else if(minus){
    displayboard.innerHTML += "9";
    answer = parseInt(number1) - 9;
    minus = false;
  }else if(multiply){
    displayboard.innerHTML += "9";
    answer = parseInt(number1) * 9;
    multiply = false;
  }else if(divide){
    displayboard.innerHTML += "9";
    answer = parseInt(number1) / 9;
    divide = false;
  }else{
    displayboard.innerHTML = "9";
  }
})


//clear
let clear = document.getElementById("clear");
clear.addEventListener("click", function(e){
  displayboard.innerHTML = "0";
})

// equal
let equal = document.getElementById("equal");
equal.addEventListener("click", function(e){
  displayboard.innerHTML = answer.toString();
})

// add
let plus = document.getElementById("plus");
plus.addEventListener("click", function(e){
  displayboard.innerHTML += "+";
  add = true;
})

//minus
let substract = document.getElementById("minus");
substract.addEventListener("click", function(e){
  displayboard.innerHTML += "-";
  minus = true;
})

// multiply
let multiplication = document.getElementById("multiply");
multiplication.addEventListener("click", function(e){
  displayboard.innerHTML += "X";
  multiply =true;
})

let division = document.getElementById("divide");
division.addEventListener("click", function(e){
  displayboard.innerHTML += "/";
  divide = true;
})