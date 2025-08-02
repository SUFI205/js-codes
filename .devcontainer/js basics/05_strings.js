const name = "Thor";
const repocount = 10;
//console.log(name + repocount + " values");

console.log(`${name} has ${repocount} repositories.`); // Template literals

const gamename = new String("Call of Duty");
console.log(gamename[0]); // String object
console.log(typeof gamename); // object

const newstring=gamename.toUpperCase();
console.log(newstring); // Call of Duty in uppercase
const newstring2=gamename.substring(0, 4);
console.log(newstring2); // Call in uppercase

const url="https://www.exampl%20e.com";
console.log(url.replace('%20','-'));