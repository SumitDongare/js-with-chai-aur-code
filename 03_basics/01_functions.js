
// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)

// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2

}

const result = addTwoNumbers(3, 4)
// console.log("Result:", result)

function loginUserMessage(username = "Sam"){
    if(!username){
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sumit"))
// console.log(loginUserMessage())


function calculateCartPrice( val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 500, 2000))

const user = {
    username: "Sumit",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

handleObject({
    username: "Hitesh",
    price: 200
})


const myNewArray = [200, 400, 100, 600, 7000]

function returnSecondValue(getArray){
 
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([300, 800, 500, 4000]))