
/*const profile={
    name:"umar",
    posts:195,
    isfollow:true,
    message:" follow me on facebook",
};
console.log(profile);
let a=7;
let b=3;
let c=a+b;
console.log(c);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a%b);*/
//increment and decrement
/*let a=7;
a++;
console.log(a);
let a=7;
//console.log(a++);
console.log(++a);
//assinment operator
let a=5;
a+=2;
console.log(a);*/
//comparison values
//let a=7;
//let b=3;
//console.log(a<b);
//logical operator
//console.log(a!=b && a<b);
//console.log(a!=b || a<b);
//conditional statement
/*let age=15;
if(age>=18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}
let a=20;
if(a%2===0){
    console.log("number is even");
}
else{
    console.log("number is odd");
}
//ternary operator
let age=35;
let result=age>=35? "adult":"not adult";
console.log(result);*/
//switch statement
/*const week = 'saturday';
switch (week) {
  case 'thuesday':
    console.log('today is theusday');
    break;
  case 'wednesday':
    console.log('today is wednesday');
    break;
  case 'monday':
    console.log('today is monday');
    break;
  default:
    console.log("Friday");
}*/
/*
const expr = 'Papaya';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of `,expr);
}
    */
//practice Q1
/*let a=prompt("enter a number");
if(a%5===0){
console.log(a," is multiple of 5");
}
else{
    console.log(a ," is not a multiple of 5");
}
*/
//Practice Q2
/*
let a=prompt("enter a number between 1 to 100");
if(a>=80 && a<=100){
    console.log("Grade A");
}
else if(a>=70 && a<=79){
    console.log("Grade B");
}
else if(a>=60 && a<=69){
    console.log("Grade C");
}
else if(a>=50 && a<=59){
    console.log("Grade D");
}
else if(a>=0 && a<=49){
    console.log("Fail");
}
else{
console.log(" incorrect input");
}*/
// loops
/*for (let step = 0; step <5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
  }
  console.log("loop ended");
  //while loop
  let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
console.log("n=",n ,"x=",x)
//while loop using to proint from 1 to 5
let i=0;
while(i<5){
  console.log("i=",i);
  i++;
}*/
//practice Q
/*
let even;
for(even=0;even<=10;even++){
  if(even%2==0){
    console.log("even number is ",even);
  }
}
  */
//Game of guessing random number
/*
let number=25;
let Usernum=prompt("enter number");
while(number!=Usernum){
 Usernum=prompt("enter again, you entered wrong number");
}
console.log("congratulation, you entered right number");
*/
let str=prompt("enter full name");
console.log("@"+str+str.length);









