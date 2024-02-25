console.log('strings');

const name='muzna'
const repocount=50
// console.log(name+repocount+"value");
console.log(`my name is ${name} and my repoCount ${repocount}`);

const gameName=new String('muzna')
console.log(gameName[0]);
console.log(gameName.__proto__);

const student=new String('hello')
console.log(student);
console.log(student.length);
console.log(student.toLowerCase());
console.log(student.toUpperCase());

console.log(student.slice(0,4));
console.log(student.split(""));
console.log(student.charAt(2));
console.log(student.indexOf('e'));

const gameTime=new String('eight-clock')
console.log(gameTime);
const newString=gameTime.substring(8,-1)
console.log(newString);

const newStringOne='story\n\nhanushi\n\n\n      '
console.log(newStringOne);
console.log(newStringOne.trim());

const newStringTwo='     dijai     '
console.log(newStringTwo);
console.log(newStringTwo.trim());


const url='https://hani.com/hani-choud'
;
console.log(url.replace('-','%20'));

console.log(url.includes('com'));
console.log(url.includes('ui'));
console.log(url.split('/',));
console.log(url.slice(-7,-1));



/* slice(startindex,endindex)   last character is not included.always expect lower index at start. 
negative index start from left to right.
(-7,-1)=>true   (-1,-7)=>false

substring(startindex,endindex)  this swaps the index if staart is higher than end. also negative
indices are considered zero
*/