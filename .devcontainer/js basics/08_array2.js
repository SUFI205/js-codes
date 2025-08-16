const myarr=[0,1,2,3,4,5,6]
console.log(myarr[0]); // 0
console.log(myarr[1]); // 1
console.log(myarr[2]); // 2
console.log(myarr[3]); // 3 

const myheroes=["thor","ironman","hulk"]
const dcheroes=["batman","superman","flash"]
myheroes.push(dcheroes);
console.log(myheroes);

const allheroes=myheroes.concat(dcheroes);
console.log(allheroes);

//spread operator
const allheroes2=[...myheroes,...dcheroes];
console.log(allheroes2);

const onotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_array=onotherarray.flat(Infinity);
console.log(real_array);

console.log(Array.isArray("sufiyan"));
console.log(Array.from("sufiyan"));


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3)); // [100, 200, 300] 
