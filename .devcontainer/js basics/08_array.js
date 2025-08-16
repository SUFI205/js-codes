const myarr=[0,1,2,3,4,5,6]
console.log(myarr[0]); // 0
console.log(myarr[1]); // 1     
const myheroes=["shaktiman","batman","superman"];
const myarr2=new Array(7);

//array methods
myarr.push(7); // adds 7 to the end of the array
console.log(myarr); // [0, 1, 2, 3, 4, 5, 6, 7]

myarr.pop(); // removes the last element from the array
console.log(myarr); // [0, 1, 2, 3, 4, 5, 6]


myarr.unshift(9);
console.log(myarr); // [9, 0, 1, 2, 3, 4, 5, 6]

myarr.shift();
console.log(myarr); // [0, 1, 2, 3, 4, 5, 6]

console.log(myarr.includes(3));
console.log(myarr.indexOf(4));

const newarr=myarr.slice(2,5);
console.log(newarr); // [2, 3, 4]
