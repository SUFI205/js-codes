const user={
    username: "hitesh",
    price: 1000,

    welcomemessage: function()
    {
        console.log(`${this.username} welcome to our website`);
    }
}

user.welcomemessage();
user.username="sam";
user.welcomemessage();


function chai()
{
    let username="hitesh";
    console.log(this.username);
}

chai()
