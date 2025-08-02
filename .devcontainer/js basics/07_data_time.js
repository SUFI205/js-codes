let mydate=new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(typeof mydate);

let mycreatedate=new Date(2025,7,2)
console.log(mycreatedate.toDateString());

let mytimestamp=Date.now();
console.log(mytimestamp);
let mydatefromtimestamp=new Date(mytimestamp);
console.log(mydatefromtimestamp.toDateString());