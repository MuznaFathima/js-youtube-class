// primitive(directly stored in memory)

// 7 types :string,number,boolean,null,undefined,BigInt,symbol

// non primitive or reference type(reference or address are stored in memory)

// 3 types: Array, Objects, Functions


// js is dynamilcally typed language becuase datatype will be automatically assigned during code execution


// Symbol
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
// BigInt
const BIgNum=23465687890023456879809n
console.log(BIgNum);

const Array=['a','b','c']

const myFun=function (){
    console.log('hello');
}

function start(){
    console.log('start');
}
console.log('-----------------------');
console.log(typeof Array);
console.log(typeof myFun);
console.log(typeof start);

// -------------------------------
// memories
// stack(primitive) heap(non-primitive)

let fruits='apples'
let anotherfruit=fruits
anotherfruit='oranges'

console.log(fruits);
console.log(anotherfruit);

let brands=['fenty','rare','rhode']

let anotherbrand=brands

anotherbrand.push('rem')
console.log(brands);
console.log(anotherbrand);


let userOne={
    email:'user@gmail.com',
    upi:"df@oksbi"
}
let userTwo=userOne

userTwo.email='new@gmail.com'

console.log(userOne.email);
console.log(userTwo.email);