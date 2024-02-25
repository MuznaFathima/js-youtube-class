// Dates

let myDate=new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toJSON());


console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

let mydate=new Date(2024,1,25,5,7)
console.log(mydate.toLocaleString());

let newdate=new Date("2024-02-25")
console.log(newdate.toLocaleString())

// timestamp

let myTimeStamp=Date.now()
// console.log(myTimeStamp);

// console.log(newdate.getTime());
console.log(Math.floor(Date.now()/1000));

let newnew=new Date()

console.log(newnew);
console.log(newnew.toDateString())
console.log(newnew.getDay())
console.log(newnew.getMonth()+1)
console.log(newnew.getFullYear())
console.log(newnew.getHours())
console.log(newnew.getMinutes())
console.log(newnew.getSeconds())
console.log(newnew.getMilliseconds())


newnew.toLocaleString('default',{
    weekday:"long"
})