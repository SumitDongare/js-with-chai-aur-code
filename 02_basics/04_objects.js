//const tinderUser = new Object();   //Singalton object
const tinderUser = {};             //Non Singleton object 

tinderUser.id = "123abc";
tinderUser.name = "Syam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname:{
            firstname : "Sumit",
            lastname : "Dongare"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users = [

    {
        id : 1,
        email: "S@s.com"
    },

    {
        id : 2,
        email: "t@t.com"
    },

    {
        id : 3,
        email: "u@u.com"
    },

]

// console.log(users[2].email)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// *********** Object de-structure and JSON API **********

const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} =  course;
// console.log(instructor)


// ********** JSON **********


// {
//     "name" : "Sumit",
//     "coursename" : "JS in hindi",
//     "price" : "free"
// }