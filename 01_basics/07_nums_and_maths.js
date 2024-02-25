const score=244
console.log(score);
const balance=new Number(244)
console.log(balance);
// string represantation of balance
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const count=14.289
console.log(count.toPrecision(4));
const count2=234.903
console.log(count2.toPrecision(3));


const otherNumber=1000000
console.log(otherNumber.toLocaleString());
console.log(otherNumber.toLocaleString('en-In'));


// +++++++++++++++++++Maths++++++++++++++++
console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.6));
console.log(Math.round(3.2));
console.log(Math.ceil(4.5));
console.log(Math.ceil(-3.5));
console.log(Math.floor(-4.2));

console.log(Math.min(2,8,9,9,0,-2));
console.log(Math.max(2,8,9,9,0,-2));
// random
console.log(Math.random());
console.log(Math.random()*10);
// to avoid zero
console.log((Math.random()*10)+1);
// to get whole number

console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*100)+1);


const min=50;
const max=60;

console.log(Math.floor(Math.random()*(max-min+1))+min)




