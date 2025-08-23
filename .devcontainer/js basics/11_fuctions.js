function saymyname()
{
    console.log("S");
    console.log("U");
    console.log("F");
    console.log("I");
    console.log("Y");
    console.log("A");
    console.log("N");
}

saymyname();

function addtwonumbers(num1,num2)
{
    console.log(num1+num2);
}

addtwonumbers(5,6);

function loginusermessage(username)
{
    if(username===undefined)
    {
        console.log("Please enter a username");
        return;
    }
    return '${username} just logged in';
}
console.log(loginusermessage("sufiyan"));