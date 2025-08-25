// //if
// const isuserloggedin=true
// const isuserloggedtemp=41
// if(isuserloggedtemp<50)//2==2//3!=2
// {
//     console.log("less than 50");
// }
// else
// {
// console.log("temp is greater")
// }
// //<,>,<=,>=,==,!=,===,!==

// const score=45
// if(score>80)
// {
//     console.log("A+");
// }
// else if(score>60)
// {
//     console.log("A");
// }


// const balance = 1000;
// if (balance > 500) {
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }

// const userloggedin=true
// const debitcaard=true
// const loggedinfromgoogle=false
// const loggedinfromemail=true

// if(userloggedin && debitcaard)
// {
//     console.log("pay using debit card");
// }

// if(loggedinfromgoogle || loggedinfromemail)
// {
//     console.log("login success");
// }


// 

const useremail=""

if(useremail)
{
    console.log("got user email");
}
else
{
    console.log("email not found");
}

///falsy values
//undefined
//null          
//0
//""
//NaN
//false
//true
// 


//truthy values
//"abc"
//" "
//[]
//{}
//function(){}
//new Date()
//-1        
//Infinity
//-Infinity
//42

if(useremail.length===0)
{
    console.log("array is empty");
}


const emptyobj={}
if(Object.keys(emptyobj).length===0)
{
    console.log("object is empty");
}

///nullish coalescing operator(??):null undefined

let val1;
//val1=5 ?? 10
val1=null ?? 10
console.log(val1);

//ternary operator
//condition ? true : false
const iceteaprice=100
iceteaprice>=80 ? console.log("ice tea is expensive") : console.log("ice tea is cheap");    


