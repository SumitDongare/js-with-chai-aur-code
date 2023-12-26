// singleton
// Object.create


// object literals

const mySym = Symbol("key1")


const  JsUser = {
    name: "Sumit",
    "full Name":"Sumit Dongare",
    [mySym] : "mykey1",
    age: 18,
    location: "Nagpur",
    email : "sumit@sumit.com",
    isLogedIn : false,
    lastLogInDays : ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sumit@d.com";
// Object.freeze(JsUser);
JsUser.email = "sumit@chat.com";
// console.log(JsUser["email"]);
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user")
}   

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());