const tinderuser = {};
tinderuser.id = "123abc";
tinderuser.name = "sammy";
tinderuser.isLoggedIn = false;

console.log(tinderuser);


const regularuser={
    email: "some@gmail.com",
    fullname:
    {
        userfullname:
        {
            firstname: "sachin",
            lastname: "tendulkar"
        }

    }
}
console.log(regularuser.fullname.userfullname.firstname);

const obj1={1: "a", 2:"b"}
const obj2={1: "a", 2:"b"}
//const obj3={obj1,obj2}
//console.log(obj3);
//console.log(obj1==obj2);
//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3);

const obj3={...obj1,...obj2}
console.log(obj3);

 